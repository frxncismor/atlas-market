import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import Stripe from 'stripe';
import { environment } from './app/environments/environment';

// Configura Stripe con tu clave secreta (usa variables de entorno en producción)
const stripe = new Stripe(environment.stripePrivateApiKey, {
  apiVersion: "2025-02-24.acacia",
});


const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

 // Endpoint para crear una sesión de Stripe Checkout
app.post("/create-checkout-session", async (req, res) => {
  console.log(req.body);
  try {
    // Aquí puedes extraer datos del request si los necesitas (por ejemplo, producto, cantidad, etc.)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card", "oxxo"],
      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: "Test Product",
            },
            unit_amount: 2000, // $20.00 en centavos
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${environment.domain}/success`,
      cancel_url: `${environment.domain}/cancel`,
    });
    res.json({ id: session.id });
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);

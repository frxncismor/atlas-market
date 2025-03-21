import { Component } from '@angular/core';
import { StripeService } from '../../services/stripe.service';
import { environment } from '../../../../environment';


@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(private stripeService: StripeService) {}

  checkout() {
    this.stripeService.createCheckoutSession().subscribe({
      next: async (session) => {
        console.log(session);
        const stripe = (window as any).Stripe(environment.stripePublicApiKey);
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
        if (error) {
          console.error("Error al redirigir a Checkout:", error);
        }
      },
      error: (error) => {
        console.error("Error al crear la sesión de pago:", error);
      },
    });
  }
}

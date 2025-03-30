import { Routes } from '@angular/router';
import { CancelComponent } from './pages/cancel/cancel.component';
import { SuccessComponent } from './pages/success/success.component';
import { HomeComponent } from './pages/home/home.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutMercadopagoComponent } from './components/checkout-mercadopago/checkout-mercadopago.component';
import { FailureComponent } from './pages/failure/failure.component';
import { PendingComponent } from './pages/pending/pending.component';

export const routes: Routes = [
  { path: "cancel", component: CancelComponent },
  { path: "success", component: SuccessComponent },
  { path: "failure", component: FailureComponent },
  { path: "pending", component: PendingComponent },
  { path: "home", component: HomeComponent, title: 'Atlas Market | Home'},
  { path: "checkout", component: CheckoutComponent},
  { path: "", redirectTo: "/home", pathMatch: "full" },
];


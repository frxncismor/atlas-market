import { Routes } from '@angular/router';
import { CancelComponent } from './pages/cancel/cancel.component';
import { SuccessComponent } from './pages/success/success.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: "cancel", component: CancelComponent },
  { path: "success", component: SuccessComponent },
  { path: "checkout", component: HomeComponent },
  { path: "", redirectTo: "/checkout", pathMatch: "full" },
];


import { Component } from '@angular/core';
import { CheckoutComponent } from "../../components/checkout/checkout.component";

@Component({
  standalone: true,
  imports: [CheckoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

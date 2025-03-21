import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class StripeService {
  private checkoutUrl = "/create-checkout-session";

  constructor(private http: HttpClient) {}

  createCheckoutSession(): Observable<{ id: string }> {
    return this.http.post<{ id: string }>(this.checkoutUrl, {});
  }
}

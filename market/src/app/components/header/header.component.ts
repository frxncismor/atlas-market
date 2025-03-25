import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() isThemeSwitcherEnabled: boolean = false;
  @Input() isDeliveryOptionsEnabled: boolean = false;
  @Input() isAccountSignInEnabled: boolean = false;
  @Input() isShoppingCartEnabled: boolean = false;
}

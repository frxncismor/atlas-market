import { Component, Input } from '@angular/core';
import { Category } from 'app/interfaces/category.interface';
import { SimplebarAngularModule } from 'simplebar-angular';


@Component({
  standalone: true,
  selector: 'app-categories-menu',
  imports: [SimplebarAngularModule],
  templateUrl: './categories-menu.component.html',
  styleUrl: './categories-menu.component.scss',
})
export class CategoriesMenuComponent {
  @Input() categories: Category[] = [];
}

import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef,ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-featured-categories',
  imports: [CommonModule],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedCategoriesComponent {
}

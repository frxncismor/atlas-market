import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { Slide } from 'app/interfaces/slides.interface';
import { register } from 'swiper/element/bundle';

register();

@Component({
  standalone: true,
  selector: 'app-hero-slider',
  imports: [CommonModule],
  templateUrl: './hero-slider.component.html',
  styleUrl: './hero-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSliderComponent {
  @Input() slides: Slide[] = [];
}

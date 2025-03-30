import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Slide } from 'app/interfaces/slide.interface';

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

  constructor(private sanitizer: DomSanitizer) {}

  getSanitizedHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

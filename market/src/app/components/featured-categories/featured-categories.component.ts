import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FeaturedCategory } from 'app/interfaces/featured-category.interface';

@Component({
  selector: 'app-featured-categories',
  imports: [CommonModule],
  templateUrl: './featured-categories.component.html',
  styleUrl: './featured-categories.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeaturedCategoriesComponent {
  @Input() categories: FeaturedCategory[] = [];

  slidesPerView = 1;
  isMobileXSmall = false;
  isMobileSmall = false;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.observeXSmallBreakpoint();
    this.observeSmallBreakpoint();
  }

  observeXSmallBreakpoint() {
    this.responsive.observe([
      Breakpoints.XSmall
      ])
      .subscribe((result: any) => {
        console.log('result xsmall', result)
        this.isMobileXSmall = result.matches
    });
  }

  observeSmallBreakpoint() {
    this.responsive.observe([
      Breakpoints.Small
      ])
      .subscribe((result: any) => {
        console.log('result small', result)
        this.isMobileSmall = result.matches
    });
  }

}

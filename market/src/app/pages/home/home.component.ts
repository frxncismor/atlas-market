import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CategoriesMenuComponent } from 'app/components/categories-menu/categories-menu.component';
import { HeroSliderComponent } from 'app/components/hero-slider/hero-slider.component';
import { Category } from 'app/interfaces/category.interface';
import { Slide } from 'app/interfaces/slides.interface';
import { FeaturedCategoriesComponent } from 'app/components/featured-categories/featured-categories.component';

@Component({
  standalone: true,
  imports: [HeaderComponent, CategoriesMenuComponent, HeroSliderComponent, FeaturedCategoriesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {

  categories: Category[] = [];
  slides: Slide[] = [];

  constructor() {
    this.categories = [
      {
        id: 1,
        name: "Weekly sale",
        icon: "ci-percent"
      },
      {
        id: 2,
        name: "Vegetables",
        imageUrl: "images/mega-menu/grocery/th01.png"
      },
      {
        id: 3,
        name: "Easter is coming",
        imageUrl: "images/mega-menu/grocery/th02.png"
      },
      {
        id: 4,
        name: "Poultry meat",
        imageUrl: "images/mega-menu/grocery/th03.png"
      },
      {
        id: 5,
        name: "Fresh fruits",
        imageUrl: "images/mega-menu/grocery/th04.png"
      },
      {
        id: 6,
        name: "St. Patrick's day",
        imageUrl: "images/mega-menu/grocery/th05.png"
      },
      {
        id: 7,
        name: "Exotic fruits",
        imageUrl: "images/mega-menu/grocery/th06.png"
      }
    ];
    this.slides = [
      {
        className: 'swiper-1',
        backgroundColor: '#6dafca',
        lazy: true,
        heading: 'Healthy Food Available to Everyone',
        paragraph: '🔥 Free shipping - order over <strong>50$</strong>',
        linkUrl: 'shop-catalog-grocery.html',
        linkText: 'Shop now',
        image: 'images/grocery/hero-slider/01.jpg',
        alt: 'Slide 1 image'
      },
      {
        className: 'swiper-2',
        backgroundColor: '#5a7978',
        lazy: true,
        heading: 'Organic eggs from home-grown chicken',
        paragraph: '🥚 Organic products to your table',
        linkUrl: 'shop-catalog-grocery.html',
        linkText: 'Shop now',
        image: 'images/grocery/hero-slider/02.jpg',
        alt: 'Slide 2 image'
      },
      {
        className: 'swiper-3',
        backgroundColor: '#f99c03',
        lazy: false, // o true si quieres
        heading: 'Enjoy refreshing summer drink',
        paragraph: '🥝 Only natural ingredients',
        linkUrl: 'shop-catalog-grocery.html',
        linkText: 'Shop now',
        image: 'images/grocery/hero-slider/03.jpg',
        alt: 'Slide 3 image'
      }
    ];
  }
}

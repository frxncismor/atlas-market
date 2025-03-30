import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { CategoriesMenuComponent } from 'app/components/categories-menu/categories-menu.component';
import { HeroSliderComponent } from 'app/components/hero-slider/hero-slider.component';
import { Category } from 'app/interfaces/category.interface';
import { Slide } from 'app/interfaces/slide.interface';
import { FeaturedCategoriesComponent } from 'app/components/featured-categories/featured-categories.component';
import { FeaturedCategory } from 'app/interfaces/featured-category.interface';

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
  featuredCategories: FeaturedCategory[] = [];

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
        backgroundColor: '#6dafca',
        lazy: true,
        heading: 'Healthy Food Available to Everyone',
        paragraph: '🔥 Free shipping - order over <strong>$50</strong>',
        linkUrl: 'shop-catalog-grocery.html',
        linkText: 'Shop now',
        image: 'images/grocery/hero-slider/01.jpg',
        alt: 'Slide 1 image'
      },
      {
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
    this.featuredCategories = [
      {
        numberOfProducts: 124,
        heading: 'Only fresh fish to your table',
        linkUrl: 'shop-catalog-grocery.html',
        image: 'images/grocery/featured/01.png',
        alt: 'Featured Category Image 1',
        name: 'Fish',
        lazy: true,
        bgClass: 'bg-primary-subtle'
      },
      {
        numberOfProducts: 97,
        heading: 'Products for Easter table',
        linkUrl: 'shop-catalog-grocery.html',
        image: 'images/grocery/featured/02.png',
        alt: 'Featured Category Image 2',
        name: 'Desserts',
        lazy: true,
        bgClass: 'bg-success-subtle'
      },
      {
        numberOfProducts: 28,
        heading: 'Berries from the garden',
        linkUrl: 'shop-catalog-grocery.html',
        image: 'images/grocery/featured/03.png',
        alt: 'Featured Category Image 3',
        name: 'Fruits',
        lazy: false,
        bgClass: 'bg-info-subtle'
      }
    ];
  }
}

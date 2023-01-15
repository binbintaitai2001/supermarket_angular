import { Injectable } from "@angular/core";
import { Category } from "../Entity/Category";
import { Product } from "../Entity/Product";

@Injectable({
  providedIn: "root",
})
export class HomePageService {
  private products: Product[] = [
    {
      id: 1,
      name: "cucumber",
      imageUrl: "../assets/product/cucumber.png",
      price: 5000,
      discount: 10,
      quantity: 312,
    },
    {
      id: 2,
      name: "orange",
      imageUrl: "../assets/product/orange.png",
      price: 13000,
      discount: 10,
      quantity: 312,
    },
    {
      id: 3,
      name: "pork",
      imageUrl: "../assets/product/pork.png",
      price: 38000,
      discount: 10,
      quantity: 312,
    },
    {
      id: 4,
      name: "beef",
      imageUrl: "../assets/product/beef.png",
      price: 74000,
      discount: 10,
      quantity: 312,
    },
    {
      id: 5,
      name: "onion",
      imageUrl: "../assets/product/onion.png",
      price: 4000,
      discount: 10,
      quantity: 312,
    },
  ];

  categories: Category[] = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Vegetables",
    },
    {
      id: 3,
      name: "Fruits",
    },
    {
      id: 4,
      name: "Meats",
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): Category[] {
    return this.categories;
  }

  constructor() {}
}

import { Component, OnInit, Output } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../api.service";
import { Category } from "../Entity/Category";
import { Product } from "../Entity/Product";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiService
  ) {
    console.log("HomePageComponent");
  }

  ngOnInit() {
    this.getCategories();
    this.getProducts();
  }

  private categories: Category[] = [];
  private products: Product[] = [];

  getCategories(): void {
    this.service.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }

  getProducts(): void {
    this.service.getProducts().subscribe((res) => {
      this.products = res.data;
    });
  }

  findByCategory(event): void {
    console.log(event);
    if (event === "All") {
      this.getProducts();
    } else {
      let id = this.categories.find((i) => i.name === event).id;
      this.service.getProductsByCategoryId(id).subscribe((res) => {
        console.log(res);
        this.products = res.data;
      });
    }
  }

  findByName(event): void {
    console.log(event);
    if (event === "All") {
      this.getProducts();
    } else {
      this.service.getProductsByName(event).subscribe((res) => {
        console.log(res);
        this.products = res.data;
      });
    }
  }
}

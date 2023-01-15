import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/Entity/Product";
import { HomePageService } from "../home-page.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor(private homePageService: HomePageService) {
    this.products = homePageService.getProducts();
  }

  ngOnInit() {}

  private products: Product[];
}

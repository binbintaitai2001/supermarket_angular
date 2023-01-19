import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor(private service: ApiService) {
    service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnInit() {}

  private products: Product[] = [];
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-all-product",
  templateUrl: "./all-product.component.html",
  styleUrls: ["./all-product.component.css"],
})
export class AllProductComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {
    service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  private products: Product[];

  ngOnInit() {}
}

import { Component, Injectable, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() products: Product[] = [];

  public trackPro(index: number, item: Product) {
    return item.id;
  }
}

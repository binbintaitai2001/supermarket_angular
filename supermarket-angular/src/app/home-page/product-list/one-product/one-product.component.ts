import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-one-product",
  templateUrl: "./one-product.component.html",
  styleUrls: ["./one-product.component.css"],
})
export class OneProductComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() product: Product;

  OpenCartMenu(proId: number): void {
    console.log("OpenCartMenu clicked ", proId);
  }
}

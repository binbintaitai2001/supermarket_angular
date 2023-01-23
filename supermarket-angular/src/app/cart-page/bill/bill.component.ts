import { Component, Input, OnInit } from "@angular/core";
import { Cartitem } from "src/app/Entity/cartitem";

@Component({
  selector: "app-bill",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.css"],
})
export class BillComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() cartitemlist: Cartitem[];

  cartTotal = 0;
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartitemlist.forEach((item) => {
      this.cartTotal += item.quantity * item.product.price;
    });
  }
}

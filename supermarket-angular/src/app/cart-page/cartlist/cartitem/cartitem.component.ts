import { Component, Input, OnInit } from "@angular/core";
import { Cartitem } from "src/app/Entity/cartitem";

@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
 
  decrement1(): void {
    this.cartitem.quantity--;
  }
  increment1(): void {
    this.cartitem.quantity++;
  }
  @Input() cartitem:Cartitem;
}

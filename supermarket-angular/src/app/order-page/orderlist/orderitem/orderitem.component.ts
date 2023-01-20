import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-orderitem",
  templateUrl: "./orderitem.component.html",
  styleUrls: ["./orderitem.component.css"],
})
export class OrderitemComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  index: number=0;
  decrement1(): void {
    this.index--;
  }
  increment1(): void {
    this.index++;
  }
}

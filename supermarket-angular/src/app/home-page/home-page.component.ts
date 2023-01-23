import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../Entity/Product";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  products: Product[] = [];
  constructor(private route: ActivatedRoute, private router: Router) {
    console.log("HomePageComponent");
  }

  ngOnInit() {}



}

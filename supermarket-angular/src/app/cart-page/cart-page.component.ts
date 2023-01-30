import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { Cartitem } from "../Entity/cartitem";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("SuperMarket | Cart");
  }
  cartitemarray: Cartitem[] = [];

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const header: HttpHeaders = new HttpHeaders().set("Authorization", token);

      this.apiservice.getCartItem(header).subscribe(
        (reponse) => {
          console.log("reponse ", reponse);
          this.cartitemarray = reponse.data;
        },
        (error) => {
          console.log("error ", error);
          if (error.error.response === "This Access Token Expired!") {
            this.backtoLogin();
          }
        }
      );
    } else {
      this.backtoLogin();
    }
  }
  cartTotal = 0;
  calcCartTotal() {
    this.cartTotal = 0;
    this.cartitemarray.forEach((item) => {
      this.cartTotal += item.quantity * item.product.price;
    });
  }
}

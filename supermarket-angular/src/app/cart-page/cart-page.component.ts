import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { Cartitem } from "../Entity/cartitem";

@Component({
  selector: "app-cart-page",
  templateUrl: "./cart-page.component.html",
  styleUrls: ["./cart-page.component.css"],
})
export class CartPageComponent implements OnInit {
  constructor(private apiservice: ApiService, private router: Router) {}
  cartitemarray: Cartitem[] = [];
  ngOnInit() {
    const token = localStorage.getItem("token");
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
            this.router.navigate(["/login"]);
          }
        }
      );
    } else {
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

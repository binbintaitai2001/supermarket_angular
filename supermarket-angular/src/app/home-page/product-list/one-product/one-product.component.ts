import { HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-one-product",
  templateUrl: "./one-product.component.html",
  styleUrls: ["./one-product.component.css"],
})
export class OneProductComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit() {}

  @Input() product: Product;

  modalId: string = "#buyModal";

  buyQuantity: number = 1;

  decreaseBuy(): void {
    if (this.buyQuantity > 1) {
      this.buyQuantity--;
    }
  }

  increaseBuy(): void {
    this.buyQuantity++;
  }

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  addToCart(): void {
    console.log("proId:", this.product.id);
    console.log("buyQuantity:", this.buyQuantity);
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service
        .AddToCart(this.product.id, this.buyQuantity, headers)
        .subscribe(
          (res) => {
            console.log("no Error", res);
          },
          (errorObject) => {
            console.log("Error", errorObject);
            if (errorObject.error.response === "This Access Token Expired!") {
              this.backtoLogin();
            }
          }
        );
    } else {
      console.log("token expired");
      this.backtoLogin();
    }
  }
}

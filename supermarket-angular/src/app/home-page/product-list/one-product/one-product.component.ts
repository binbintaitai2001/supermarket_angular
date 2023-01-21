import { HttpHeaders } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-one-product",
  templateUrl: "./one-product.component.html",
  styleUrls: ["./one-product.component.css"],
})
export class OneProductComponent implements OnInit {
  constructor(private service: ApiService) {}

  ngOnInit() {}

  @Input() product: Product;

  buyQuantity: number = 1;

  decreaseBuy(): void {
    if (this.buyQuantity > 1) {
      this.buyQuantity--;
    }
  }

  increaseBuy(): void {
    this.buyQuantity++;
  }

  addToCart(): void {
    console.log("proId:", this.product.id);
    console.log("buyQuantity:", this.buyQuantity);
    const token = localStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service
        .AddToCart(this.product.id, this.buyQuantity, headers)
        .subscribe(
          (res) => {
            console.log("no Error", res);
            // this.router.navigate(["/admin/product/all"]);
          },
          (errorObject) => {
            console.log("Error", errorObject);
          }
        );
    } else {
      console.log("token expired");
    }
  }
}

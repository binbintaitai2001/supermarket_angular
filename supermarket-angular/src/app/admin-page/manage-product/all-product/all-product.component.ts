import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-all-product",
  templateUrl: "./all-product.component.html",
  styleUrls: ["./all-product.component.css"],
})
export class AllProductComponent implements OnInit {
  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  private products: Product[];

  ngOnInit() {
    this.service.getProducts().subscribe((res) => {
      this.products = res.data;
    });
  }

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  deleteProduct(id): void {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.DeleteProduct(id, headers).subscribe(
        (res) => {
          console.log("no Error", res);
          this.service.getProducts().subscribe((res) => {
            this.products = res.data;
          });
        },
        (error) => {
          console.log("Error", error);
          if (error.error.response === "This Access Token Expired!") {
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

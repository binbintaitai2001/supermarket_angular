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
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(id): void {
    const token = localStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.DeleteProduct(id, headers).subscribe(
        (data) => {
          console.log("no Error", data);
          this.service.getProducts().subscribe((data) => {
            this.products = data;
          });
        },
        (error) => {
          console.log("Error", error);
        }
      );
    } else {
      console.log("token expired");
    }
  }
}

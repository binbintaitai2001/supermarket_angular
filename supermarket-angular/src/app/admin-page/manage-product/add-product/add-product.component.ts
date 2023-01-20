import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.component.html",
  styleUrls: ["./add-product.component.css"],
})
export class AddProductComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {
    service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  private product: Product = new Product(
    null,
    "",
    "",
    0,
    0,
    new Category(null, "")
  );

  file: File;
  proName: string;
  price: number;
  quantity: number;
  categoryId: number;

  private categories: Category[];

  onFileSelected(event) {
    this.file = event.target.files[0];
  }

  handleSubmit(): void {
    this.proName = this.product.name;
    this.price = this.product.price;
    this.quantity = this.product.quantity;
    this.categoryId = this.product.category.id;

    const token = localStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service
        .CreateProduct(
          this.file,
          this.proName,
          this.price,
          this.quantity,
          this.categoryId,
          headers
        )
        .subscribe(
          (data) => {
            console.log("no Error", data);
            this.router.navigate(["/admin/product/all"]);
          },
          (errorObject) => {
            console.log("Error", errorObject);
          }
        );
    } else {
      console.log("token expired");
    }
  }

  ngOnInit() {}
}

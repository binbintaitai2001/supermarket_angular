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
    service.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }

  file: File = null;
  proName: string = "";
  proPrice: number = 0;
  proQuantity: number = 0;
  proCategoryId: number = 0;

  private categories: Category[];

  onFileSelected(event) {
    this.file = event.target.files[0];
    this.showImgPreview();
  }

  previewString: any = "";

  showImgPreview() {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);
    reader.onloadend = () => {
      this.previewString = reader.result;
    };
  }

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  handleSubmit(): void {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service
        .CreateProduct(
          this.file,
          this.proName,
          this.proPrice,
          this.proQuantity,
          this.proCategoryId,
          headers
        )
        .subscribe(
          (res) => {
            console.log("no Error", res);
            this.router.navigate(["/admin/product/all"]);
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

  ngOnInit() {}
}

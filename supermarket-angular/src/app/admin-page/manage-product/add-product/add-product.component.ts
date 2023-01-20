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

  handleSubmit(): void {
    const token = localStorage.getItem("token").toString();
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

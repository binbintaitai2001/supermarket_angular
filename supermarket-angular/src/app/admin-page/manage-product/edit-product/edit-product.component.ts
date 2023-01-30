import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { Product } from "src/app/Entity/Product";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.component.html",
  styleUrls: ["./edit-product.component.css"],
})
export class EditProductComponent implements OnInit {
  constructor(
    private service: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    service.getCategories().subscribe((res) => {
      this.categories = res.data;
    });

    this.route.params.subscribe((param) => {
      service.getProductById(param.id).subscribe((res) => {
        this.proName = res.data.name;
        this.proPrice = res.data.price;
        this.proQuantity = res.data.quantity;
        this.proCategoryId = res.data.category.id;
        this.productImg = res.data.img;
        this.proId = res.data.id;
      });
    });
  }

  private categories: Category[];

  proId: number = 0;
  file: File = null;
  proName: string = "";
  proPrice: number = 0;
  proQuantity: number = 0;
  proCategoryId: number = 0;

  isChangeImg: boolean = false;
  productImg: string = "";

  onFileSelected(event) {
    this.file = event.target.files[0];
    this.showImgPreview();
    this.isChangeImg = true;
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
        .UpdateProduct(
          this.proId,
          this.proName,
          this.proPrice,
          this.proQuantity,
          headers,
          this.proCategoryId,
          this.file
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

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
    service.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.route.params.subscribe((param) => {
      service.getProductById(param.id).subscribe((data) => {
        this.proName = data.name;
        this.proPrice = data.price;
        this.proQuantity = data.quantity;
        this.proCategoryId = data.category.id;
        this.productImg = data.img;
        this.proId = data.id;
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

  handleSubmit(): void {
    const token = localStorage.getItem("token").toString();
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

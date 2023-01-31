import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-edit-category",
  templateUrl: "./edit-category.component.html",
  styleUrls: ["./edit-category.component.css"],
})
export class EditCategoryComponent implements OnInit {
  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  category: Category = new Category(null, "");

  ngOnInit() {
    this.route.params.subscribe((param) => {
      console.log(param);
      this.service.getCategoryById(param.id).subscribe(
        (res) => {
          console.log("no Error", res);
          this.category = res.data;
        },
        (error) => {
          console.log("Error", error);
        }
      );
    });
  }

  handleSubmit(): void {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.UpdateCategory(this.category, headers).subscribe(
        (res) => {
          console.log("no Error", res);
          this.router.navigate(["/admin/category/all"]);
        },
        (errorObject) => {
          console.log("Error", errorObject);
          if (errorObject.error.response === "This Access Token Expired!") {
            this.service.backtoLogin(this.router);
          }
        }
      );
    } else {
      console.log("token expired");
      this.service.backtoLogin(this.router);
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { HttpHeaders } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"],
})
export class AddCategoryComponent implements OnInit {
  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  category: Category = new Category(null, "");

  ngOnInit() {}

  handleSubmit(): void {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.CreateCategiory(this.category, headers).subscribe(
        (data) => {
          console.log("no Error", data);
          alert(data.response.message);
          this.router.navigate(["/admin/category/all"]);
        },
        (errorObject) => {
          console.log("Error", errorObject);
          alert(errorObject.error.message);
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

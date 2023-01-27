import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/internal/Subscription";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-all-category",
  templateUrl: "./all-category.component.html",
  styleUrls: ["./all-category.component.css"],
})
export class AllCategoryComponent implements OnInit {
  constructor(
    private service: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  private categories: Category[];

  ngOnInit() {
    this.service.getCategories().subscribe((res) => {
      this.categories = res.data;
    });
  }

  deleteCategory(id): void {
    const token = sessionStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.DeleteCategory(id, headers).subscribe(
        (res) => {
          console.log("no Error", res);
          this.service.getCategories().subscribe((res) => {
            this.categories = res.data;
          });
        },
        (error) => {
          console.log("Error", error);
          if (error.error.response === "This Access Token Expired!") {
            this.router.navigate(["/login"]);
          }
        }
      );
    } else {
      console.log("token expired");
    }
  }
}

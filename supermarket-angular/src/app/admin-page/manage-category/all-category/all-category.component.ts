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
    this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  deleteCategory(id): void {
    const token = localStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.DeleteCategory(id, headers).subscribe(
        (data) => {
          console.log("no Error", data);
          this.service.getCategories().subscribe((data) => {
            this.categories = data;
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

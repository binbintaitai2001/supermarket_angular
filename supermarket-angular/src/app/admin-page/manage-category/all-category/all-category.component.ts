import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-all-category",
  templateUrl: "./all-category.component.html",
  styleUrls: ["./all-category.component.css"],
})
export class AllCategoryComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {
    service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  private categories: Category[];

  ngOnInit() {}
}

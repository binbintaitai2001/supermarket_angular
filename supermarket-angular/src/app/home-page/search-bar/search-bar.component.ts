import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  constructor(private service: ApiService) {
    service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnInit() {}

  private categories: Category[];

  private currentCategory = "All";

  normalClass = "nav-link";
  activeClass = "nav-link active";

  changCategory(c: string): void {
    this.currentCategory = c;
  }
}

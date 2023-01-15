import { Component, OnInit } from "@angular/core";
import { Category } from "src/app/Entity/Category";
import { HomePageService } from "../home-page.service";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  constructor(private homePageService: HomePageService) {
    this.categories = homePageService.getCategories();
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

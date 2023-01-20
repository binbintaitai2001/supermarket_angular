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

  apicallSub?: Subscription;

  private categories: Category[];

  ngOnInit() {
    console.log("calling api for categories list");
    this.apicallSub = this.service.getCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  ngOnDestroy() {
    if (this.apicallSub) {
      this.apicallSub.unsubscribe();
      console.log("apicallSub unsubcribed");
    }
  }
}

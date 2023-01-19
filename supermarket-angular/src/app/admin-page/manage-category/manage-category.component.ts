import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-manage-category",
  templateUrl: "./manage-category.component.html",
  styleUrls: ["./manage-category.component.css"],
})
export class ManageCategoryComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

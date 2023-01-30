import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
@Component({
  selector: "app-admin-page",
  templateUrl: "./admin-page.component.html",
  styleUrls: ["./admin-page.component.css"],
})
export class AdminPageComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("SuperMarket | Admin");
  }

  ngOnInit() {}
}

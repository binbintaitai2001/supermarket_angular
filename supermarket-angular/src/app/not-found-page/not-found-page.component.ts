import { TitleCasePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-not-found-page",
  templateUrl: "./not-found-page.component.html",
  styleUrls: ["./not-found-page.component.css"],
})
export class NotFoundPageComponent implements OnInit {
  constructor(private titleService: Title) {
    this.titleService.setTitle("SuperMarket | Not Found");
  }

  ngOnInit() {}
}

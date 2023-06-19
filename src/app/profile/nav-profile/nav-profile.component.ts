import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-nav-profile",
  templateUrl: "./nav-profile.component.html",
  styleUrls: ["./nav-profile.component.css"],
})
export class NavProfileComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  currentSelected: string =
    this.router.url.split("/")[this.router.url.split("/").length - 1];

  selectedClass: string =
    "btn btn-outline-primary text-primary w-100 font-weight-bold";
  nomalClass: string = "btn btn-outline-secondary text-secondary w-100";

  SetSelected(s: string): void {
    this.currentSelected = s;
  }
}

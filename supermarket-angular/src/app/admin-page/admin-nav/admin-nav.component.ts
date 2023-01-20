import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-admin-nav",
  templateUrl: "./admin-nav.component.html",
  styleUrls: ["./admin-nav.component.css"],
})
export class AdminNavComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {}

  currentSelected: string = this.router.url.split("/")[2];

  selectedClass: string = "navbar-brand btn btn-success text-light";
  nomalClass: string = "navbar-brand btn btn-secondary text-light";

  SetSelected(s: string): void {
    this.currentSelected = s;
  }
}

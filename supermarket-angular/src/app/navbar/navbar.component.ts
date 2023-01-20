import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log("isUser", this.route.snapshot.queryParamMap.get("isUser"));
    console.log(
      "isLoggedIn",
      this.route.snapshot.queryParamMap.get("isLoggedIn")
    );
    this.isUser = this.route.snapshot.queryParamMap.get(
      "isUser"
    ) as unknown as boolean;

    this.isLoggedIn = this.route.snapshot.queryParamMap.get(
      "isLoggedIn"
    ) as unknown as boolean;
  }
  @Input() isUser: boolean;

  @Input() isLoggedIn: boolean;
}

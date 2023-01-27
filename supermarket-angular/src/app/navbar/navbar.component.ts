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
    if (this.route.snapshot.queryParamMap.get("isUser") !== null) {
      this.isUser = this.route.snapshot.queryParamMap.get(
        "isUser"
      ) as unknown as boolean;
    }
    if (this.route.snapshot.queryParamMap.get("isLoggedIn") !== null) {
      this.isLoggedIn = this.route.snapshot.queryParamMap.get(
        "isLoggedIn"
      ) as unknown as boolean;
    }
    let token: string = sessionStorage.getItem("token");
    if (token) {
      this.isLoggedIn = true;
    }
  }
  @Input() isUser: boolean;

  @Input() isLoggedIn: boolean;
  gotoCart(): void {
    this.router.navigateByUrl("/cart");
  }
}

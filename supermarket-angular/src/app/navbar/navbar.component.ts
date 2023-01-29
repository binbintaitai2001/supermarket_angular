import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiService
  ) {}

  ngOnInit() {
    let checkUser = sessionStorage.getItem("isUser");
    if (checkUser) {
      if (checkUser === "true") {
        this.isUser = true;
      }
    }
    let token: string = sessionStorage.getItem("token");
    if (token) {
      this.isLoggedIn = true;
    }
  }
  @Input() isUser: boolean = false;

  @Input() isLoggedIn: boolean = false;
  gotoCart(): void {
    this.router.navigateByUrl("/cart");
  }

  handleLogOut(): void {
    this.service.Logout().subscribe(
      (res) => {
        console.log("no Error", res);
        sessionStorage.clear();
        this.isLoggedIn = !this.isLoggedIn;
        alert("logged out !!!");
        this.router.navigateByUrl("/");
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
}

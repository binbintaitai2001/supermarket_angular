import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Route, Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { User } from "src/app/Entity/User";

@Component({
  selector: "app-manage-user",
  templateUrl: "./manage-user.component.html",
  styleUrls: ["./manage-user.component.css"],
})
export class ManageUserComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  private users: User[] = [];

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);
      this.service.getAllUsers(headers).subscribe(
        (res) => {
          console.log(res);
          this.users = res.data;
        },
        (error) => {
          console.log(error);
          if (error.error.response === "This Access Token Expired!") {
            this.backtoLogin();
          }
        }
      );
    }
  }

  resetPasswordUser(id): void {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);
      this.service.ResetPasswordUser(id, headers).subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          console.log(error);
          if (error.error.response === "This Access Token Expired!") {
            this.backtoLogin();
          }
        }
      );
    } else {
      this.backtoLogin();
    }
  }
}

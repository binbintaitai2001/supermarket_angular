import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"],
})
export class ChangePasswordComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit() {}

  oldPassword: string = "";
  newPassword: string = "";
  isEditing: boolean = false;

  showPassword: boolean = false;

  ChangePasswordFail: boolean = false;
  reason: string = "";

  activeEdit(): void {
    this.isEditing = !this.isEditing;
  }

  showPass(): void {
    this.showPassword = !this.showPassword;
  }

  handleSubmit(): void {
    const token = sessionStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);
      this.service
        .updatePassword(headers, this.oldPassword, this.newPassword)
        .subscribe(
          (res) => {
            console.log("no Error", res);
            if (res.response.result) {
              alert(res.response.message);
              this.ChangePasswordFail = false;
              this.isEditing = !this.isEditing;
            }
          },
          (error) => {
            console.log("Error", error);
            this.reason = error.error.message;
            this.ChangePasswordFail = !this.ChangePasswordFail;
            if (error.error.response === "This Access Token Expired!") {
              this.router.navigate(["/login"]);
            }
          }
        );
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../api.service";
import { LoginForm } from "../Entity/LoginForm";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.css"],
})
export class LoginPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiService,
    private titleService: Title
  ) {
    this.titleService.setTitle("SuperMarket | Login");
  }

  loginForm: LoginForm = new LoginForm("", "");

  ngOnInit() {}

  showPassword: boolean = false;

  showPass(): void {
    this.showPassword = !this.showPassword;
  }

  LoginFail: boolean = false;
  reason: string = "";

  handleSubmit(): void {
    this.service.Login(this.loginForm).subscribe(
      (data) => {
        console.log(data);
        sessionStorage.setItem("userName", data.userName);
        sessionStorage.setItem("token", data.Token);
        if (data.Role === "ADMIN") {
          sessionStorage.setItem("isUser", "false");
          let returnUrl = sessionStorage.getItem("returnUrl");
          if (returnUrl) {
            this.router.navigate([returnUrl]);
          } else this.router.navigate(["/admin/product/all"]);
        } else {
          if (data.Role === "USER") {
            sessionStorage.setItem("isUser", "true");
            let returnUrl = sessionStorage.getItem("returnUrl");
            if (returnUrl) {
              this.router.navigate([returnUrl]);
            } else this.router.navigate(["/"]);
          }
        }
      },
      (errorObject) => {
        console.log(errorObject.error);
        this.reason = errorObject.error.message;
        this.LoginFail = true;
      }
    );
  }
}

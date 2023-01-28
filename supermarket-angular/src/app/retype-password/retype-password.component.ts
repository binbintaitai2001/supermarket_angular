import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-retype-password",
  templateUrl: "./retype-password.component.html",
  styleUrls: ["./retype-password.component.css"],
})
export class RetypePasswordComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit() {}

  code: string = "";
  password: string = "";
  confirmPassword: string = "";

  showPassword: boolean = false;

  showPass(): void {
    this.showPassword = !this.showPassword;
  }

  match: boolean = false;

  checkMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  handleSubmit(): void {
    this.service.ForgetPasswordRetype(this.password, this.code).subscribe(
      (res) => {
        console.log("no Error", res);
        if (res.response.result) {
          alert(res.response.message);
          this.router.navigate(["/login"]);
        }
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
}

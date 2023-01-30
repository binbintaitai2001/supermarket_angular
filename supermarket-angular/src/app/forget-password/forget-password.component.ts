import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(
    private service: ApiService,
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("SuperMarket | Forget Password");
  }

  ngOnInit() {}

  email: string = "";

  failed: boolean = false;
  reason: string = "";

  handleSubmit(): void {
    this.service.ForgetPassword(this.email).subscribe(
      (res) => {
        console.log("no Error", res);
        if (res.response.result) {
          this.router.navigate(["/retype-password"]);
        }
      },
      (error) => {
        console.log("Error", error);
        this.reason = error.error.message;
        this.failed = !this.failed;
      }
    );
  }
}

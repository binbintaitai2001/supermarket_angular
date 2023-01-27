import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.css"],
})
export class ForgetPasswordComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  ngOnInit() {}

  email: string = "";

  handleSubmit(): void {
    this.service.ForgetPassword(this.email).subscribe(
      (res) => {
        console.log("no Error", res);
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-retype-password",
  templateUrl: "./retype-password.component.html",
  styleUrls: ["./retype-password.component.css"],
})
export class RetypePasswordComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

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
    console.log("password", this.password);
    console.log("confirmPassword", this.confirmPassword);
  }
}

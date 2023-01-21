import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from "../api.service";
import { User } from "../Entity/User";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ApiService
  ) {}

  ngOnInit() {}

  RegisterFail: boolean = false;

  showPassword: boolean = false;

  showPass(): void {
    this.showPassword = !this.showPassword;
  }

  user: User = new User("", "", "", "", "", "");

  handleSubmit(): void {
    this.service.Register(this.user).subscribe(
      (res) => {
        console.log("no Error", res);
        alert(res.response.message);
        this.router.navigate(["/login"]);
      },
      (errorObject) => {
        console.log("Error", errorObject);
      }
    );
  }
}

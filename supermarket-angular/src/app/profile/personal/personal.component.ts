import { HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "src/app/api.service";
import { UpdateUserForm } from "src/app/Entity/UpdateUserForm";
import { User } from "src/app/Entity/User";

@Component({
  selector: "app-personal",
  templateUrl: "./personal.component.html",
  styleUrls: ["./personal.component.css"],
})
export class PersonalComponent implements OnInit {
  constructor(private service: ApiService, private router: Router) {}

  backtoLogin(): void {
    sessionStorage.setItem("returnUrl", this.router.url);
    this.router.navigate(["/login"]);
  }

  ngOnInit() {
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);
      this.service.getProfile(headers).subscribe(
        (res) => {
          console.log("no Error", res);
          this.user = res.data;
          this.user.dob = this.formatDateToString(Number(this.user.dob));
        },
        (error) => {
          console.log("Error", error);
          if (error.error.response === "This Access Token Expired!") {
            this.backtoLogin();
          }
        }
      );
    }
  }

  formatDateToString(milisecon: number): string {
    let DobString: string[] = new Date(Number(this.user.dob))
      .toLocaleDateString()
      .split("/");

    // console.log(DobString);

    let finalDob: string = "";

    if (DobString[0].length === 1) {
      DobString[0] = "0".concat(DobString[0]);
    }

    if (DobString[1].length === 1) {
      DobString[1] = "0".concat(DobString[1]);
    }

    finalDob += DobString[2] + "-" + DobString[0] + "-" + DobString[1];

    // console.log(finalDob);
    return finalDob;
  }

  user: User = new User(0, "", "", "", "", "", "", "");
  isEditing: boolean = false;
  updateUserForm: UpdateUserForm = new UpdateUserForm("", "", "", "", "");

  ChangeProfileFail: boolean = false;
  reason: string = "";

  activeEdit(): void {
    this.isEditing = !this.isEditing;
  }

  saveInfo(): void {
    this.updateUserForm.address = this.user.address;
    this.updateUserForm.dob = this.user.dob;
    this.updateUserForm.email = this.user.email;
    this.updateUserForm.fullname = this.user.fullname;
    this.updateUserForm.phone = this.user.phone;

    console.log(this.updateUserForm);
    const token = sessionStorage.getItem("token");
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);
      this.service.updateProfile(headers, this.updateUserForm).subscribe(
        (res) => {
          console.log("no Error", res);
          if (res.response.result) {
            alert(res.response.message);
            this.ChangeProfileFail = false;
            this.isEditing = !this.isEditing;
          }
        },
        (error) => {
          console.log("Error", error);
          this.reason = error.error.message;
          this.ChangeProfileFail = !this.ChangeProfileFail;
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

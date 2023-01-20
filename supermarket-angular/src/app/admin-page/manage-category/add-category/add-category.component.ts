import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-add-category",
  templateUrl: "./add-category.component.html",
  styleUrls: ["./add-category.component.css"],
})
export class AddCategoryComponent implements OnInit {
  constructor(private service: ApiService) {
    console.log("AddCategoryComponent");
  }

  category: Category = new Category(null, "");

  ngOnInit() {
    console.log("AddCategoryComponent");
  }

  handleSubmit(): void {
    const token = localStorage.getItem("token").toString();
    if (token !== null) {
      const headers = new HttpHeaders().set("Authorization", token);

      this.service.CreateCategiory(this.category, headers).subscribe(
        (data) => {
          console.log(data);
        },
        (errorObject) => {
          console.log(errorObject);
        }
      );
    } else {
      console.log("token expired");
    }
  }
}

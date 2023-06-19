import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ApiService } from "src/app/api.service";
import { Category } from "src/app/Entity/Category";

@Component({
  selector: "app-search-bar",
  templateUrl: "./search-bar.component.html",
  styleUrls: ["./search-bar.component.css"],
})
export class SearchBarComponent implements OnInit {
  constructor(private service: ApiService) {}

  ngOnInit() {}

  @Input() categories: Category[];
  @Output() findByCategory: EventEmitter<string> = new EventEmitter<string>();
  @Output() findByName: EventEmitter<string> = new EventEmitter<string>();

  private currentCategory = "All";

  private keywords: string = "";

  normalClass = "nav-link";
  activeClass = "nav-link active";

  changeCategory(c: string): void {
    this.currentCategory = c;
    this.findByCategory.emit(this.currentCategory);
  }

  handleSubmit(): void {
    console.log(this.keywords);
    this.findByName.emit(this.keywords);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./Entity/Category";
import { LoginForm } from "./Entity/LoginForm";
import { Product } from "./Entity/Product";
import { HttpHeaders } from "@angular/common/http";
import { User } from "./Entity/User";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private ServerLink = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  Register(user: User): Observable<any> {
    return this.http.post<LoginForm>(this.ServerLink + "/signUp", user);
  }

  Login(loginForm: LoginForm): Observable<any> {
    return this.http.post<LoginForm>(this.ServerLink + "/login", loginForm);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.ServerLink + "/product/list");
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.ServerLink + "/category/list");
  }

  CreateCategiory(category: Category, headers: HttpHeaders): Observable<any> {
    return this.http.post<Category>(
      this.ServerLink + "/category/create",
      category,
      { headers: headers }
    );
  }

  CreateProduct(
    file: File,
    proName: string,
    price: number,
    quantity: number,
    categoryId: number,
    headers: HttpHeaders
  ): Observable<any> {
    let formData: FormData = new FormData();

    formData.append("file", file);
    formData.append("proName", proName);
    formData.append("price", price.toString());
    formData.append("quantity", quantity.toString());
    formData.append("categoryId", categoryId.toString());

    return this.http.post<Category>(
      this.ServerLink + "/product/create",
      formData,
      { headers: headers }
    );
  }
}

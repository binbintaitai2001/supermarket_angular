import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "./Entity/Category";
import { LoginForm } from "./Entity/LoginForm";
import { Product } from "./Entity/Product";
import { HttpHeaders } from "@angular/common/http";
import { User } from "./Entity/User";
import { ResponseObjectEntity } from "./Entity/ResponseObJectEntity";
import { Cartitem } from "./Entity/cartitem";
import { UpdateUserForm } from "./Entity/UpdateUserForm";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private ServerLink = "http://localhost:5000";

  constructor(private http: HttpClient) {}

  backtoLogin(router: Router): void {
    alert("Time out! please login again");
    sessionStorage.setItem("returnUrl", router.url);
    router.navigate(["/login"]);
  }

  Register(user: User): Observable<any> {
    return this.http.post<LoginForm>(this.ServerLink + "/user/signUp", user);
  }

  Login(loginForm: LoginForm): Observable<any> {
    return this.http.post<LoginForm>(
      this.ServerLink + "/user/login",
      loginForm
    );
  }

  getProfile(headers: HttpHeaders): Observable<ResponseObjectEntity<User>> {
    return this.http.get<ResponseObjectEntity<User>>(
      this.ServerLink + "/user/profile",
      { headers: headers }
    );
  }

  updateProfile(
    headers: HttpHeaders,
    updateUserForm: UpdateUserForm
  ): Observable<ResponseObjectEntity<UpdateUserForm>> {
    return this.http.put<ResponseObjectEntity<UpdateUserForm>>(
      this.ServerLink + "/user/update",
      updateUserForm,
      { headers: headers }
    );
  }

  updatePassword(
    headers: HttpHeaders,
    oldPassword: string,
    newPassword: string
  ): Observable<ResponseObjectEntity<UpdateUserForm>> {
    return this.http.put<ResponseObjectEntity<UpdateUserForm>>(
      this.ServerLink + "/user/change-password",
      { oldPassword: oldPassword, newPassword: newPassword },
      { headers: headers }
    );
  }

  Logout(): Observable<any> {
    return this.http.get<any>(this.ServerLink + "/user/logout");
  }

  ResetPasswordUser(id, headers: HttpHeaders): Observable<any> {
    return this.http.post<LoginForm>(
      this.ServerLink + "/user/resetPassword/" + id,
      {
        headers: headers,
      }
    );
  }

  ForgetPassword(email: string): Observable<any> {
    sessionStorage.setItem("email", email);
    return this.http.post<string>(
      this.ServerLink + "/user/forget-password",
      email
    );
  }

  ForgetPasswordRetype(password: string, code: string): Observable<any> {
    let email: string = sessionStorage.getItem("email");
    return this.http.post<string>(this.ServerLink + "/user/retype-password", {
      code: code,
      email: email,
      password: password,
    });
  }

  getCategories(): Observable<ResponseObjectEntity<Category[]>> {
    return this.http.get<ResponseObjectEntity<Category[]>>(
      this.ServerLink + "/category/list"
    );
  }

  getCategoryById(id): Observable<ResponseObjectEntity<Category>> {
    return this.http.get<ResponseObjectEntity<Category>>(
      this.ServerLink + "/category/byId/" + id
    );
  }

  CreateCategiory(category: Category, headers: HttpHeaders): Observable<any> {
    return this.http.post<Category>(
      this.ServerLink + "/category/create",
      category,
      { headers: headers }
    );
  }

  UpdateCategory(category: Category, headers: HttpHeaders): Observable<any> {
    return this.http.put<Category>(
      this.ServerLink + "/category/update",
      category,
      { headers: headers }
    );
  }

  DeleteCategory(id, headers: HttpHeaders): Observable<any> {
    return this.http.delete<Category>(
      this.ServerLink + "/category/delete/" + id,
      { headers: headers }
    );
  }

  getProducts(): Observable<ResponseObjectEntity<Product[]>> {
    return this.http.get<ResponseObjectEntity<Product[]>>(
      this.ServerLink + "/product/list"
    );
  }

  getProductsByCategoryId(
    categoryId
  ): Observable<ResponseObjectEntity<Product[]>> {
    return this.http.get<ResponseObjectEntity<Product[]>>(
      this.ServerLink + "/product/bycatId/" + categoryId
    );
  }

  getProductsByName(name): Observable<ResponseObjectEntity<Product[]>> {
    return this.http.get<ResponseObjectEntity<Product[]>>(
      this.ServerLink + "/product/byName?name=" + name
    );
  }

  getProductById(id): Observable<ResponseObjectEntity<Product>> {
    return this.http.get<ResponseObjectEntity<Product>>(
      this.ServerLink + "/product/byId/" + id
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

  UpdateProduct(
    proId: number,
    proName: string,
    price: number,
    quantity: number,
    headers: HttpHeaders,
    categoryId?: number,
    file?: File
  ): Observable<any> {
    let formData: FormData = new FormData();

    formData.append("proId", proId.toString());
    formData.append("proName", proName);
    formData.append("price", price.toString());
    formData.append("quantity", quantity.toString());
    if (categoryId) {
      formData.append("categoryId", categoryId.toString());
    }
    if (file) {
      formData.append("file", file);
    }

    return this.http.put<Product>(
      this.ServerLink + "/product/update",
      formData,
      { headers: headers }
    );
  }

  DeleteProduct(id, headers: HttpHeaders): Observable<any> {
    return this.http.delete<Product>(
      this.ServerLink + "/product/delete/" + id,
      { headers: headers }
    );
  }

  AddToCart(
    proId: number,
    quantity: number,
    headers: HttpHeaders
  ): Observable<any> {
    return this.http.post<any>(
      this.ServerLink + "/cart/addToCart",
      { proId: proId, quantity: quantity },
      {
        headers: headers,
      }
    );
  }

  getCartItem(
    headers: HttpHeaders
  ): Observable<ResponseObjectEntity<Cartitem[]>> {
    return this.http.get<ResponseObjectEntity<Cartitem[]>>(
      this.ServerLink + "/cart/byUser",
      { headers: headers }
    );
  }

  getAllUsers(headers: HttpHeaders): Observable<ResponseObjectEntity<User[]>> {
    return this.http.get<ResponseObjectEntity<User[]>>(
      this.ServerLink + "/user/list",
      { headers: headers }
    );
  }
}

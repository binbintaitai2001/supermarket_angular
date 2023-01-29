import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { ManageProductComponent } from "./admin-page/manage-product/manage-product.component";
import { ManageCategoryComponent } from "./admin-page/manage-category/manage-category.component";
import { AddCategoryComponent } from "./admin-page/manage-category/add-category/add-category.component";
import { ManageOrderComponent } from "./admin-page/manage-order/manage-order.component";
import { ManageUserComponent } from "./admin-page/manage-user/manage-user.component";
import { EditCategoryComponent } from "./admin-page/manage-category/edit-category/edit-category.component";
import { AllCategoryComponent } from "./admin-page/manage-category/all-category/all-category.component";
import { AllProductComponent } from "./admin-page/manage-product/all-product/all-product.component";
import { AddProductComponent } from "./admin-page/manage-product/add-product/add-product.component";
import { EditProductComponent } from "./admin-page/manage-product/edit-product/edit-product.component";
import { ProfileComponent } from "./profile/profile.component";
import { RegisterComponent } from "./register/register.component";
import { CartPageComponent } from "./cart-page/cart-page.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { RetypePasswordComponent } from "./retype-password/retype-password.component";
import { ChangePasswordComponent } from "./profile/change-password/change-password.component";
import { YourOrdersComponent } from "./profile/your-orders/your-orders.component";
import { PersonalComponent } from "./profile/personal/personal.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginPageComponent },
  {
    path: "profile",
    component: ProfileComponent,
    children: [
      {
        path: "personal",
        component: PersonalComponent,
      },
      {
        path: "change-password",
        component: ChangePasswordComponent,
      },
      {
        path: "your-orders",
        component: YourOrdersComponent,
      },
    ],
  },
  { path: "cart", component: CartPageComponent },
  {
    path: "admin",
    component: AdminPageComponent,
    children: [
      {
        path: "product",
        component: ManageProductComponent,
        children: [
          { path: "all", component: AllProductComponent },
          { path: "add", component: AddProductComponent },
          { path: "edit/:id", component: EditProductComponent },
        ],
      },
      {
        path: "category",
        component: ManageCategoryComponent,
        children: [
          { path: "all", component: AllCategoryComponent },
          { path: "add", component: AddCategoryComponent },
          { path: "edit/:id", component: EditCategoryComponent },
        ],
      },
      { path: "order", component: ManageOrderComponent },
      { path: "user", component: ManageUserComponent },
    ],
  },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "retype-password", component: RetypePasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

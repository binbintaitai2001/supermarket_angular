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

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginPageComponent },
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
        ],
      },
      {
        path: "category",
        component: ManageCategoryComponent,
        children: [
          { path: "all", component: AllCategoryComponent },
          { path: "add", component: AddCategoryComponent },
          { path: "edit", component: EditCategoryComponent },
        ],
      },
      { path: "order", component: ManageOrderComponent },
      { path: "user", component: ManageUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ProductListComponent } from "./home-page/product-list/product-list.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./home-page/banner/banner.component";
import { SearchBarComponent } from "./home-page/search-bar/search-bar.component";
import { FooterComponent } from "./home-page/footer/footer.component";
import { OneProductComponent } from "./home-page/product-list/one-product/one-product.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from "./login-page/login-page.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { ManageProductComponent } from "./admin-page/manage-product/manage-product.component";
import { ManageCategoryComponent } from "./admin-page/manage-category/manage-category.component";
import { AddCategoryComponent } from "./admin-page/manage-category/add-category/add-category.component";
import { AdminNavComponent } from "./admin-page/admin-nav/admin-nav.component";
import { DashboardComponent } from "./admin-page/dashboard/dashboard.component";
import { ManageOrderComponent } from "./admin-page/manage-order/manage-order.component";
import { ManageUserComponent } from "./admin-page/manage-user/manage-user.component";
import { EditCategoryComponent } from './admin-page/manage-category/edit-category/edit-category.component';
import { AllCategoryComponent } from './admin-page/manage-category/all-category/all-category.component';
import { AllProductComponent } from './admin-page/manage-product/all-product/all-product.component';
import { AddProductComponent } from './admin-page/manage-product/add-product/add-product.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProductComponent } from './admin-page/manage-product/edit-product/edit-product.component';
import { RegisterComponent } from './register/register.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { BillComponent } from './order-page/bill/bill.component';
import { OrderlistComponent } from './order-page/orderlist/orderlist.component';
import { OrderitemComponent } from './order-page/orderlist/orderitem/orderitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductListComponent,
    NavbarComponent,
    BannerComponent,
    SearchBarComponent,
    FooterComponent,
    OneProductComponent,
    LoginPageComponent,
    AdminPageComponent,
    ManageProductComponent,
    ManageCategoryComponent,
    AddCategoryComponent,
    AdminNavComponent,
    DashboardComponent,
    ManageOrderComponent,
    ManageUserComponent,
    EditCategoryComponent,
    AllCategoryComponent,
    AllProductComponent,
    AddProductComponent,
    ProfileComponent,
    EditProductComponent,
    RegisterComponent,
    OrderPageComponent,
    BillComponent,
    OrderlistComponent,
    OrderitemComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

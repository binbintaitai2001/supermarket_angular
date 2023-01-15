import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { ProductListComponent } from './home-page/product-list/product-list.component';
import { NavbarComponent } from './home-page/navbar/navbar.component';
import { BannerComponent } from './home-page/banner/banner.component';
import { SearchBarComponent } from './home-page/search-bar/search-bar.component';
import { FooterComponent } from './home-page/footer/footer.component';
import { OneProductComponent } from './home-page/product-list/one-product/one-product.component';

@NgModule({
  declarations: [AppComponent, HomePageComponent, ProductListComponent, NavbarComponent, BannerComponent, SearchBarComponent, FooterComponent, OneProductComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

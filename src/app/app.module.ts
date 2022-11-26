import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { HomeComponent } from './Components/Home/home/home.component';
import { MainComponent } from './Components/Main/main/main.component';
import { ProductsComponent } from './Components/Products/products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthServiceService } from './AuthServices/auth-service.service';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { ReusableCardComponent } from './Components/reusable-card/reusable-card.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ProductViewComponent } from './Components/product-view/product-view.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { UpdateProductComponent } from './Components/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MainComponent,
    ProductsComponent,
    SideBarComponent,
    ReusableCardComponent,
    ProductListComponent,
    ProductViewComponent,
    AddProductComponent,
    UpdateProductComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

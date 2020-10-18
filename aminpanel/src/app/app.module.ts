import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './dashboard/default/default.component';
import { CategoryComponent } from './dashboard/category/category.component';
import { AddcategoryComponent } from './dashboard/addcategory/addcategory.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { EditcategoryComponent } from './dashboard/category/editcategory/editcategory.component';
import { ChangepasswordComponent } from './dashboard/changepassword/changepassword.component';
import { AddproductsComponent } from './dashboard/addproducts/addproducts.component';
import { EditproductComponent } from './dashboard/products/editproduct/editproduct.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { FeedbacksComponent } from './dashboard/feedbacks/feedbacks.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DefaultComponent,
    CategoryComponent,
    AddcategoryComponent,
    ProductsComponent,
    EditcategoryComponent,
    ChangepasswordComponent,
    AddproductsComponent,
    EditproductComponent,
    OrdersComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

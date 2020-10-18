import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { CatproComponent } from './pages/catpro/catpro.component';
import { ShopdefaultComponent } from './pages/shopdefault/shopdefault.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { OrderComponent } from './pages/order/order.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    DefaultComponent,
    CartComponent,
    ShopComponent,
    SidebarComponent,
    CatproComponent,
    ShopdefaultComponent,
    ProductdetailsComponent,
    SearchComponent,
    SignupComponent,
    SigninComponent,
    OrderComponent,
    MyordersComponent,
    AboutusComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

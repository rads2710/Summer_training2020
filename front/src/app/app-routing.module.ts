import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { DefaultComponent } from './pages/default/default.component';
import { CartComponent } from './pages/cart/cart.component';
import { ShopComponent } from './pages/shop/shop.component';
import { CatproComponent } from './pages/catpro/catpro.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ShopdefaultComponent } from './pages/shopdefault/shopdefault.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { OrderComponent } from './pages/order/order.component';
import { MyordersComponent } from './pages/myorders/myorders.component';
import { AboutusComponent } from './aboutus/aboutus.component';
const routes: Routes = [
{path:'',component:DefaultComponent},
{path:'contact',component:ContactComponent},
{path:'search',component:SearchComponent},
{path:'about',component:AboutusComponent},
{path:'myorders',component:MyordersComponent},
{path:'placeorder',component:OrderComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
{path:'cart',component:CartComponent},
{path:'shop',component:ShopComponent,children:[
{path:'catpro/:cn',component:CatproComponent},
{path:'sidebar',component:SidebarComponent},
{path:'',component:ShopdefaultComponent},
{path:'productdetails/:pn',component:ProductdetailsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

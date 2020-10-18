import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
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
const routes: Routes = [
{path:'',component:LoginComponent},
{path:'dashboard',component:DashboardComponent,children:[
{path:'',component:DefaultComponent},
 {path:'category',component:CategoryComponent},
 {path:'addcategory',component:AddcategoryComponent},
 {path:'product',component:ProductsComponent},
 {path:'editcategory/:cid',component:EditcategoryComponent},
 {path:'changepassword',component:ChangepasswordComponent },
 {path:'addproducts',component:AddproductsComponent },
  {path:'editproduct/:pid',component:EditproductComponent},
  {path:'orders',component:OrdersComponent},
  {path:'feedback',component:FeedbacksComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

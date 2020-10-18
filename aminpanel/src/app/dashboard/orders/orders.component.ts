import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
resData;
orderData;
  constructor(private cser:CategoryService) { }

  ngOnInit() {
  	this.cser.getOrders().
  	subscribe(res=>{
  		this.resData=res;
  		if(this.resData.err==0)
  		{
  			this.orderData=this.resData.orderdata;
  		}

  	})

  }

 changeStatus(id)
 {
 	console.log(id);
 	this.cser.changeOrderStatus(id).
 	subscribe(res=>
 	{
 	   this.resData=res;
 	   if(this.resData.err==0)
 	   {

 	   	Swal.fire(
      'Congrats',
      'order mark as delivered',
      'success')
 	   	this.cser.getOrders().
  	subscribe(res=>{
  		this.resData=res;
  		if(this.resData.err==0)
  		{
  			this.orderData=this.resData.orderdata;
  		}

  	})

 	   }
 	   else
 	   {
 	   	Swal.fire(
      'oops',
      'something went wrong',
      'error')
 	   }
 	})
 }

}

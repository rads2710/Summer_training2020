import { Component, OnInit } from '@angular/core';
import {ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
resData;
cartData;
gtotal;
  constructor(private pser:ProductService) { }

  ngOnInit() {
  	this.pser.getcartData(localStorage.getItem('userId'))
  	.subscribe(res=>
  	{
      this.resData=res;
      if(this.resData.err==0)
      {
      	this.cartData=this.resData.cdata;
      	this.gtotal=this.resData.gtotal;
        
      }

     
  	})
  }

remCart(pn)
{
	this.pser.removeCart(pn,localStorage.getItem('userId'))
	.subscribe(res=>
	{
	this.resData=res;
	if(this.resData.err==0)
	{
		this.pser.getcartData(localStorage.getItem('userId'))
  	.subscribe(res=>
  	{
      this.resData=res;
      if(this.resData.err==0)
      {
      	this.cartData=this.resData.cdata;
      	this.gtotal=this.resData.gtotal;
      	Swal.fire("congrats","product removed from cart","success")
      }

     
  	})
	}
	})
}
  
  
  
   

}

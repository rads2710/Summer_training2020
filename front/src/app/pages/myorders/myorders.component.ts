import { Component, OnInit } from '@angular/core';
import {OrderService} from 'src/app/services/order.service';
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
resData;
orderData;
  constructor(private oser:OrderService) { }

  ngOnInit() {
  	this.oser.getMyOrder(localStorage.getItem('userId'))
  	.subscribe(res=>
  	{
       this.resData=res;
       if(this.resData.err==0)
       {
       	this.orderData=this.resData.odata;
       }
  	})
  }

}

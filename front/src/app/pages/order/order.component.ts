import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {OrderService} from 'src/app/services/order.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
resData;
orderDetails;
gtotal;
myForm:FormGroup;
  constructor(private fb:FormBuilder,private pser:ProductService,private oser:OrderService) { }

  ngOnInit() {
  	this.validate();
  	this.pser.getcartData(localStorage.getItem('userId'))
  	.subscribe(res=>
  	{
  		this.resData=res;
  		if(this.resData.err==0)
  		{
         this.orderDetails=this.resData.cdata;
         this.gtotal=this.resData.gtotal;
  		}
  	})
  }
orderPlaced()
{
let formData=this.myForm.getRawValue();
console.log(formData);
this.oser.placeOrder(localStorage.getItem('userId'),formData)
.subscribe(res=>
{
this.resData=res;
if(this.resData.err==0)
{
	Swal.fire("congrats","order placed successfully","success");
}
else
{
	console.log(this.resData.msg)
}
})

}

validate()
{
	this.myForm=this.fb.group(
	{

		'address':['',Validators.required],
        'mobile':['',Validators.required],
        'altmobile':['',Validators.required]
	})
}
}

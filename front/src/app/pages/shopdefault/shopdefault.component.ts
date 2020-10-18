import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-shopdefault',
  templateUrl: './shopdefault.component.html',
  styleUrls: ['./shopdefault.component.css']
})
export class ShopdefaultComponent implements OnInit {
resData;
proData;
  constructor(private pser:ProductService) { }

  ngOnInit() {
  	this.pser.getallpro().
  	subscribe(res=>
  	{
  		this.resData=res;
  		if(this.resData.err==0)
  		{
  			this.proData=this.resData.pdata;
  		}
  		else
  		{
  			console.log(this.resData.msg);
  		}
  	})
  }

}

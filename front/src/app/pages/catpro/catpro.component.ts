import { Component, OnInit } from '@angular/core';
import {ProductService} from 'src/app/services/product.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-catpro',
  templateUrl: './catpro.component.html',
  styleUrls: ['./catpro.component.css']
})
export class CatproComponent implements OnInit {
catname;
prodata;
resData;
  constructor(private pser:ProductService,private ar:ActivatedRoute) { }

  ngOnInit() {
  	this.ar.params.subscribe(par=>
  	{
  		this.catname=par.cn;
  		this.pser.getpro(this.catname).
  		subscribe(res=>
  		{
            this.resData=res;
            if(this.resData.err==0)
            {
            	this.prodata=this.resData.pdata;
            }
  		})
  	})
  }

}

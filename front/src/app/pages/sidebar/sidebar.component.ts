import { Component, OnInit } from '@angular/core';
import {ProductService} from  'src/app/services/product.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
resData;
catData;
catDataMen;
  constructor(private pser:ProductService) { }

  ngOnInit() {
  	this.pser.getCatFrontWomen().
  	subscribe(res=>
  	{
      this.resData=res;
      if(this.resData.err==0)
      {
      	this.catData=this.resData.cdata;
      }
  	})

    this.pser.getCatFrontMen().
    subscribe(res=>
    {
      this.resData=res;
      if(this.resData.err==0)
      {
        this.catDataMen=this.resData.pdata;
      }
    })
  }
  

}

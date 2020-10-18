import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core'; 
import {ProductService} from 'src/app/services/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
sData;
resData;
serData;
constructor(private pser:ProductService,private router:Router) { }

  ngOnInit() {
  	this.sData=localStorage.getItem('searchId');
  	console.log(this.sData)

  	
  	this.pser.getSearch(this.sData)
  	.subscribe(res=>
  	{
       this.resData=res;
       if(this.resData.err==0)
       {
       	this.serData=this.resData.sdata;
      // 	localStorage.removeItem('searchId')
       //	this.router.navigate(['/search'])

       }
  	})
  	
}



}

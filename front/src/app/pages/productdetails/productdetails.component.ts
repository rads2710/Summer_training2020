import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from 'src/app/services/product.service';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
proname;
resData;
prodata;
pna;
uId;
myForm=new FormGroup({size:new FormControl(),color:new FormControl(),qty:new FormControl()})
	// myForma=new FormGroup({color:new FormControl()})
	// 	myFormb=new FormGroup({qty:new FormControl()})

  constructor(private ar:ActivatedRoute,private pser:ProductService) { }

  ngOnInit() {
  	this.ar.params.subscribe(par=>
  	{
  		this.proname=par.pn;
  		console.log(this.proname)
  		this.pser.getprodetails(this.proname).
  		subscribe(res=>
  		{
            this.resData=res;
            if(this.resData.err==0)
            {
            	this.prodata=this.resData.pdata;
              localStorage.removeItem('searchId')
            }
  		})
  	})
  }

  fun()
  {
    this.ar.params.subscribe(par=>
    {
       this.pna=par.pn;
    })
  	let formData=this.myForm.getRawValue();

    this.uId=localStorage.getItem('userId');
    console.log(formData);
    //formData.append('email',this.uId);
    if(this.uId!=null){
    this.pser.addCart(this.pna,this.uId,formData)
    .subscribe(res=>
    {
    	this.resData=res;
    	if(this.resData.err==0)
    	{
    	Swal.fire("congrats","added to cart","success");
    	}
      else
      {
      Swal.fire("congrats","added to cart","error");
      }

    })	
  }
  else
  {
    Swal.fire("oops!","you have to login first","error")
  }
}

}

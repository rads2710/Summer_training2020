import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {ProductService} from 'src/app/services/product.service';
import {FormGroup,FormControl} from '@angular/forms';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   resData;
   catData;
   proData;
   msg;
   cat;
   myForm=new FormGroup({
   	xyz:new FormControl()
   })
  constructor(private cser:CategoryService,private pser:ProductService,private router:Router) { }



delpro(id)
  {

  Swal.fire({
  title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'
}).then((result) => {

  if (result.value) {
  	this.pser.deleteproduct(id)
    .subscribe(res=>
      {
        
        this.resData=res;
        if(this.resData.err==0)
        {
          this.msg=this.resData.msg;
          this.pser.getProduct()
          .subscribe(res=>
            {
               this.resData=res;
               if(this.resData.err==0)
               {
                 this.proData=this.resData.pdata;
                console.log(this.catData);
            
               }
               this.router.navigate(['/dashboard/product']);
            })
        }
      })
    Swal.fire(
      'Deleted!',
      'Your imaginary file has been deleted.',
      'success'
    )
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Your imaginary file is safe :)',
      'error'
    )
  }
})



    
  }

filter()
{
	if(this.myForm.controls.xyz.value=="All products")
	{
		this.pser.getProduct()
    	.subscribe(res=>
    	{
    		this.resData=res;
    		if(this.resData.err==0)
    		{
    			this.proData=this.resData.pdata;
    		}
    	})

	}
	else{
this.cat=this.myForm.controls.xyz.value;
// let FormData=this.myForm.getRawValue();
console.log(this.cat);
this.pser.getFilter(this.cat)
.subscribe(res=>
{
	this.resData=res;
	if(this.resData.err==0)
	{
		this.proData=this.resData.pdata;
	}
})

}
}


  ngOnInit() {
  	
    	this.pser.getProduct()
    	.subscribe(res=>
    	{
    		this.resData=res;
    		if(this.resData.err==0)
    		{
    			this.proData=this.resData.pdata;
    		}
    	})

    	this.cser.getCat()
    .subscribe(res=>
    {
    	this.resData=res;
    	if(this.resData.err==0)
    	{
    	  this.catData=this.resData.cdata;
    	}

 })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
   resData;
   catData;
   msg;
  constructor(private catser:CategoryService) { }
   delcat(id)
  {
  Swal.fire({
  title: 'Are you sure?',
  text: 'You will not be able to recover this imaginary file!',/*
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, keep it'*/
}).then((result) => {
  if (result.value) {
  	this.catser.deletecategory(id)
    .subscribe(res=>
      {
        
        this.resData=res;
        if(this.resData.err==0)
        {
          this.msg=this.resData.msg;
          this.catser.getCat()
          .subscribe(res=>
            {
               this.resData=res;
               if(this.resData.err==0)
               {
                 this.catData=this.resData.cdata;
                 console.log(this.catData);
               }
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

  ngOnInit() {
  	this.catser.getCat()
  	.subscribe(res=>
  	{
  		this.resData=res;
  		if(this.resData.err==0)
  		{
  			this.catData=this.resData.cdata;
  		}
  	}),err=>
  	{
  		
  	}
  }

}

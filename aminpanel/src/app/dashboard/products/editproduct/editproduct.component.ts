import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
   pro_id;
   myForm:FormGroup;
   resData;
   myImage;
  constructor(private fb:FormBuilder,private pser:ProductService,private ar:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  	this.validate();
    this.ar.params.subscribe(par=>
      {
        this.pro_id=par.pid;
        //console.log(this.pro_id);
        this.pser.fetchproById(this.pro_id)
        .subscribe(res=>
          {
         this.resData=res;
         //console.log(this.resData.pdata[0])
         this.myForm.patchValue(this.resData.pdata[0])
          })
      })
}

   fileUpload(event)
  {
    if(event.target.files.length>0)
     {
       this.myImage=event.target.files[0];
       //console.log(this.myImage);
     }
  }

editProduct()
{
	if(this.myImage==undefined)
	{
		Swal.fire("oops","please select a image","error")
	}
	else{
let formData=new FormData();
     formData.append('pname',this.myForm.controls.pname.value);
     formData.append('description',this.myForm.controls.description.value);
     formData.append('Image',this.myImage)
     formData.append('brand',this.myForm.controls.brand.value);
     formData.append('price',this.myForm.controls.price.value);
     this.pser.editPro(this.pro_id,formData)
     .subscribe(res=>
     {
      this.resData=res;
      if(this.resData.err==0)
      {
        this.router.navigate(['/dashboard/product']);
        Swal.fire("congrats","changes saved successfully!","success");
      }
      else
      {
        Swal.fire("oops","some error has occured","error"); 
      }
     })
}
}
  

      validate()

      {
      	this.myForm=this.fb.group(
      	{
      'pname':['',Validators.required],
      'description':['',Validators.required],
      'brand':['',Validators.required],
      'price':['',Validators.required]
      	})
      }
  }



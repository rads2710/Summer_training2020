import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ProductService} from 'src/app/services/product.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
resData;
catData;
myForm:FormGroup;
myImage;
  constructor(private fb:FormBuilder,private cser:CategoryService,private pser:ProductService,private router:Router) { }

  ngOnInit() {

    this.validate();
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
   fileUpload(event)
  {
    if(event.target.files.length>0)
     {
       this.myImage=event.target.files[0];
       console.log(this.myImage);
     }
  }
  addPro()
  {
let formData=new FormData();
    formData.append('pname',this.myForm.controls.pname.value);
    formData.append('description',this.myForm.controls.description.value);
    formData.append('Image',this.myImage);
    formData.append('brand',this.myForm.controls.brand.value);
    formData.append('price',this.myForm.controls.price.value);
    formData.append('category',this.myForm.controls.category.value);
    this.pser.addProduct(formData)
    .subscribe(res=>
    {
       this.router.navigate(['/dashboard/product'])
        Swal.fire("Congrats!", "Product saved successfully!", "success");
    })

  }
  validate()
  {
   this.myForm=this.fb.group(
    {
      'pname':['',Validators.required],
      'description':['',Validators.required],
      'brand':['',Validators.required],
      'price':['',Validators.required],
      'category':['',Validators.required]

    })
  }

}

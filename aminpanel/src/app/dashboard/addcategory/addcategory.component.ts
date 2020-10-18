import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl} from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

gendervalue;
myForm:FormGroup;
  myImage;
  constructor(private fb:FormBuilder,private catser:CategoryService,private router:Router) {
   

   }

  ngOnInit() {
    this.validate();
  }
  fileUpload(event)
  {
    if(event.target.files.length>0)
     {
       this.myImage=event.target.files[0];
       console.log(this.myImage);
     }
  }

  radioChangeHandler(event:any)
  {
    this.gendervalue=event.target.value;
  }

  addFormCategory()
  {
    let formData=new FormData();
    formData.append('cname',this.myForm.controls.cname.value);
    formData.append('description',this.myForm.controls.description.value);
    formData.append('Image',this.myImage);
    formData.append('gender',this.gendervalue);
   // formData.append('gender',this.myForm.controls.abc.value);
    //console.log(formData);
    this.catser.addCat(formData)
    .subscribe(res=>
      {
         this.router.navigate(['/dashboard/category'])
        Swal.fire("Congratulations!", "Category saved successfully!", "success");
      //  swal("Hello world!");


      })
  }

  
  validate()
  {
    this.myForm=this.fb.group(
      {
        'cname':['',Validators.required],
        'description':['',Validators.required]
      }
    )
  }
  
}

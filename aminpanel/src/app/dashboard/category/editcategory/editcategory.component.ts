import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {
  cat_id;
  resData;
  myForm:FormGroup;
  myImage;
  constructor(private fb:FormBuilder,private ar:ActivatedRoute,private cser:CategoryService,private router:Router) { }

  ngOnInit() {
    this.validate();
    this.ar.params.subscribe(par=>
      {
        this.cat_id=par.cid;
        console.log(this.cat_id);
        this.cser.fetchcatById(this.cat_id)
        .subscribe(res=>
          {
         this.resData=res;
         console.log(this.resData.cdata[0])
         this.myForm.patchValue(this.resData.cdata[0])
          })
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

  editFormCategory()
  {  
    if(this.myImage==undefined)
    {
      Swal.fire("OOPS","Please select a image","error")
    }
    else
    {
    let formData=new FormData();
     formData.append('cname',this.myForm.controls.cname.value);
     formData.append('description',this.myForm.controls.description.value);
     formData.append('Image',this.myImage)
     this.cser.editCat(this.cat_id,formData)
     .subscribe(res=>
     {
      this.resData=res;
      if(this.resData.err==0)
      {
        this.router.navigate(['/dashboard/category']);
        Swal.fire("Congrats","Changes saved successfully!","success");
      }
      else
      {
        Swal.fire("OOPS","Some error has occured","error"); 
      }
     })
  }
}


   validate()
   {
     this.myForm=this.fb.group({
       'cname':['',Validators.required],
       'description':['',Validators.required]
     })
   }
}

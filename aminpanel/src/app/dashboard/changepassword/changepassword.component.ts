import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
myForm:FormGroup
msg;
resData;
  constructor(private fb:FormBuilder, private cser:CategoryService) { }

passChange()
{
	let formData=this.myForm.getRawValue();
	if(formData.newpassword!=formData.confirmpassword)
	{
       this.msg="new and confirm password are not matched";
       console.log("not")
	}
	else
	{
		let uid=localStorage.getItem('userId')
		// this.cser.getOldpassword(uid)
		// .subscribe(res=>
		// {
		// 	this.resData=res;
		// 	if(this.resData.)
		// })
		this.cser.changePass(uid,formData)
		.subscribe(res=>
		{   this.resData=res;
			if(this.resData.err==0)
			{
				Swal.fire("Congrats!", "password changed successfully!", "success");
			}
			else
			{
				Swal.fire("OOPS!", "old password is incorrect", "error");
			}
		})

	}
}
  ngOnInit() {
  	this.validate()
  }
  validate()
   {
     this.myForm=this.fb.group({
       'oldpassword':['',Validators.required],
       'newpassword':['',Validators.required],
       'confirmpassword':['',Validators.required]
       
     })
   }

}

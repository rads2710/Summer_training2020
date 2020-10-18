import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import Swal from 'sweetalert2';
import {LoginService} from 'src/app/services/login.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
myForm:FormGroup
resData;
  constructor(private fb:FormBuilder,private lser:LoginService,private router:Router) { }

  ngOnInit() {
  	this.validate();
  }

validate()
{
	this.myForm=this.fb.group(
	{
		'email':['',Validators.required],
        'mobile':['',Validators.required],
        'password':['',Validators.required],
        'rpassword':['',Validators.required],

	})
}
signUp()
{
  let formData=this.myForm.getRawValue();
  if(formData.password==formData.rpassword){
  	this.lser.signup(formData)
  	.subscribe(res=>
  	{
       this.resData=res;
       if(this.resData.err==0)
       {
       localStorage.setItem('userId',formData.email);
       localStorage.setItem('status',"true");
       localStorage.setItem('tempstatus',"true");
       Swal.fire("congrats","Login successfully!","success")
          this.router.navigate(['/']);
       }
       else
       {
       	localStorage.setItem('status',"false");
       	Swal.fire("oops","email or mobile is already registered","error")

       }
  	})
  
}
else
{
  Swal.fire("oops","password and confirm password must be same ","error")
}
}

}

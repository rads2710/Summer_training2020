import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LoginService} from 'src/app/services/login.service';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
myForm:FormGroup
resData;
  constructor(private fb:FormBuilder,private lser:LoginService,private router:Router) { }

  ngOnInit() {
  	this.validate();
  }

LogIn()
{
let formData=this.myForm.getRawValue()
this.lser.accLogin(formData)
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
            // document.location.reload(true)
       }
       else
       {
       	localStorage.setItem('status',"false");
       	Swal.fire("oops","email or password is incorrect","error")

       }
  	})

}


 validate()
{
	this.myForm=this.fb.group(
	{
		'email':['',Validators.required],
        'password':['',Validators.required]

	})
}

}

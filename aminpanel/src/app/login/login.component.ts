import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  resData;
  errMsg;
  constructor(private fb:FormBuilder,private lser:LoginService,private router:Router) { }

  loginSubmit()
  {
    //let name=this.myForm.controls.name.value;
     let formData=this.myForm.getRawValue();//all value get in a object
      this.lser.adminLoginData(formData)
     .subscribe(res=>
      {

      this.resData=res;
        if(this.resData.err==0)
        {
          localStorage.setItem('userId',this.resData.user);
          this.router.navigate(['/dashboard']);
        }
        if(this.resData.err==1)
        {
          this.errMsg=this.resData.msg;
        }
      },err=>
      {
        console.log("api error");
      })
  }

  ngOnInit() {
  	this.validate();
  }

 validate()
  {
    this.myForm=this.fb.group(
      {
        'email':['',Validators.required],
        'password':['',Validators.required]
      }
    )
  }

}


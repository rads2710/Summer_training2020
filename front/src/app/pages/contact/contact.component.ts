import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {ProductService} from 'src/app/services/product.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
myForm:FormGroup
resData;
msg;
  constructor(private fb:FormBuilder,private pser:ProductService) { }

  ngOnInit() {
  	this.validate()
  }
send()
{
	let formData=this.myForm.getRawValue();
	this.pser.feedback(formData).
	subscribe(res=>
	{
     this.resData=res;
     if(this.resData.err==0)
     {
     	this.msg=this.resData.msg;
     	Swal.fire("congrats","feedback send successfully","success");
     }
	})
}
validate()
{
	this.myForm=this.fb.group(
	{
		'name':['',Validators.required],
		'email':['',Validators.required],
		'subject':['',Validators.required],
		'message':['',Validators.required]
	})
}
}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/services/product.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
myForm=new FormGroup({
       searchvalue: new FormControl()
    });
msg;
resData;
sData;
stat;
  constructor(private pser:ProductService,private router:Router) { }

  ngOnInit() {
  	this.stat=localStorage.getItem('status')
  }

search()
{
 let formData=this.myForm.getRawValue();
//console.log(formData)
this.msg=this.myForm.controls.searchvalue.value;
if(this.msg!=undefined){
  	localStorage.setItem('searchId',this.msg);
  		document.location.reload(true);
  			//this.router.navigate(['/search'])
  }
}
LogOut()
   {
     localStorage.removeItem('userId');
     localStorage.setItem('status',"false")
      //this.router.navigate(['/']);
      document.location.reload(true)
   }

}
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  url="http://localhost:7788/api/";

signup(data)
{
 return this.http.post(this.url+"signupaccount",data);
}

accLogin(data)
{
 return this.http.post(this.url+"loginaccount",data);	
}

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   url="http://localhost:7788/api/";
  constructor(private http:HttpClient) { }
   adminLoginData(data)
   {
     return this.http.post(this.url+'adminlogin',data);
   }
}

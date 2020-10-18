import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
   url="http://localhost:7788/api/";

   placeOrder(uid,data)
   {
   	return this.http.post(this.url+"placeorder/"+uid,data)
   }
   getMyOrder(uid)
   {
   	return this.http.get(this.url+"getorderdetails/"+uid)
   }
}

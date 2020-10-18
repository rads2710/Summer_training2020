import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url="http://localhost:7788/api/";
  constructor(private http:HttpClient) { }
  addCat(data)
  {
    return this.http.post(this.url+'addCategory',data);
  }
   getCat()
  {
    return this.http.get(this.url+'getCategory');
  }
  deletecategory(id)
  {
    return this.http.get(this.url+"delcat/"+id);
  }
   fetchcatById(id)
  {
    return this.http.get(this.url+"fetchcatbyid/"+id);
  }
  changePass(id,data)
  {
  
  	return this.http.post(this.url+"changepassword/"+id,data)
  }
  editCat(id,data)
  {
  	return this.http.post(this.url+"editcategory/"+id,data)
  }
  getOrders()
  {
    return this.http.get(this.url+"getallorders")
  }
  changeOrderStatus(id)
  {
    return this.http.get(this.url+"changeorderstatus/"+id)
  }
getFeedbacks()
  {
    return this.http.get(this.url+"getfeedbacks")
  }


}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
 
export class ProductService {
    url="http://localhost:7788/api/";
  constructor(private http:HttpClient) { }
  addProduct(data)
  {
  	return this.http.post(this.url+"addproduct",data);
  }
  getProduct()
  {
  		return this.http.get(this.url+"getproduct");
  }
   deleteproduct(id)
  {
    return this.http.get(this.url+"delpro/"+id);
  }
  fetchproById(id)
  {
  	return this.http.get(this.url+"fetchprobyid/"+id);
  }
  editPro(id,data)
  {
  	 return this.http.post(this.url+"editproduct/"+id,data);
  }
  getFilter(d)
  {
  	return this.http.get(this.url+"getfilter/"+d);
  }
  
}

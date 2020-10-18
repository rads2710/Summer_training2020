import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
    url="http://localhost:7788/api/";
    feedback(data)
    {
    	return this.http.post(this.url+"feedback",data);
    }

   getcat()
   {
   	 return this.http.get(this.url+"getCategory");
   }
   getpro(cn)
   {
   	 return this.http.get(this.url+"getproduct/"+cn);
   }
    getallpro()
   {
   	 return this.http.get(this.url+"getproduct");
   }
     getprodetails(pn)
   {
     return this.http.get(this.url+"getproductdetails/"+pn);
   }
    addCart(pn,uId,data)
   {
     return this.http.post(this.url+"addtocart/"+pn+"/"+uId,data);
   }
     getcartData(uid)
   {
     return this.http.get(this.url+"getcartdata/"+uid);
   }
   removeCart(pn,uid)
   {
     return this.http.get(this.url+"removefromcart/"+pn+"/"+uid);
   }
    getSearch(sd)
   {
     return this.http.get(this.url+"getsearchdata/"+sd);
   }
getCatFrontWomen()
{
  return this.http.get(this.url+"getCategoryfrontfemales");
}
getCatFrontMen()
{
  return this.http.get(this.url+"getCategoryfrontmales");
}

}

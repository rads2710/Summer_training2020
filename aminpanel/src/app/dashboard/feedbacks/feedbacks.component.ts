import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
resData;
feedData;
  constructor(private cser:CategoryService) { }

  ngOnInit() {
  	this.cser.getFeedbacks()
  	.subscribe(res=>
  	{
      this.resData=res;
      if(this.resData.err==0)
      {
      	this.feedData=this.resData.fdata;
      	
      }
     
      	
  	})
  }

}

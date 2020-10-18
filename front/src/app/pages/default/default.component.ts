import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	if(localStorage.getItem('status')=="true" && localStorage.getItem('tempstatus')=="true")
  	{
  	  localStorage.setItem('tempstatus',"false")
  	  document.location.reload(true);	
  	}
  }

}

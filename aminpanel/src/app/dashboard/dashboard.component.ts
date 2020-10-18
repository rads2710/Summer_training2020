import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userId;
  constructor(private router:Router) { }
   signOut()
   {
     localStorage.removeItem('userId');
      this.router.navigate(['/'])
   }
  ngOnInit() {
    this.userId=localStorage.getItem('userId');
  }

}
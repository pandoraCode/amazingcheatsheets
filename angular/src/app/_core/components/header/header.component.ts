import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {LoginComponent}  from '../login/login.component';
import {AuthService} from '../../services/auth/auth.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  
})
export class HeaderComponent implements OnInit {
  

  loggedin ;
 
  
  constructor(private auth: AuthService, private router: Router) {
    this.auth.currentUser.subscribe(x => this.loggedin = x);
   }


   logout(){
  
    this.router.navigate(['/login']);
    this.auth.logout();
    this.loggedin = null;
  }

  ngOnInit(): void {

  }

}

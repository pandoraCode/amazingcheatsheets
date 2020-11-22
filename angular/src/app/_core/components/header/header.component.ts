import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {LoginComponent}  from '../login/login.component';
import {AuthService} from '../../services/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  
})
export class HeaderComponent implements OnInit {
  

  constructor(private auth: AuthService) { }

  loggedin = this.auth.loggedIn;

  get logout(){return this.auth.logout};

  ngOnInit(): void {
    console.log(this.loggedin);
  }

}

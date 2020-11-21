import { Component, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {LoginComponent}  from '../login/login.component';
import { WebClientService } from '../web-client.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  
})
export class HeaderComponent implements OnInit {
  

  constructor(public api: WebClientService) { }

  loggedin = this.api.loggedIn;

  

  ngOnInit(): void {
    console.log(this.loggedin);
  }

}

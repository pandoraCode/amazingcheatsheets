import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import { SearchbarComponent } from './searchbar/searchbar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { CardComponent } from './searchbar/card/card.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    CardComponent,

    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

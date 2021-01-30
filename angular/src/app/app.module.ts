import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './_core/components/header/header.component';
import { SearchbarComponent } from './_core/components/searchbar/searchbar.component';
import { RegisterComponent } from './_core/components/register/register.component';
import { LoginComponent } from './_core/components/login/login.component';
import { CardComponent } from './_shared/components/card/card.component';
import { UploadSheetComponent } from './_core/components/upload-sheet/upload-sheet.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchbarComponent,
    CardComponent,

    RegisterComponent,
    LoginComponent,
    UploadSheetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule

    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

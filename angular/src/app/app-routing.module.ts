import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './_core/components/login/login.component';
import {SearchbarComponent} from './_core/components/searchbar/searchbar.component';
import {RegisterComponent} from './_core/components/register/register.component';
import { UploadSheetComponent } from './_core/components/upload-sheet/upload-sheet.component';


const routes: Routes = [
  { path: '', component: SearchbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'uploadSheet', component:  UploadSheetComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import {HttpService} from '../../../_shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router,private http: HttpService ) { }

  RequestResponse;


  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
    
  }

  registerUser(registerData: FormGroup) {


    try{

 
		
        this.http.post("api/user/register", registerData.value).subscribe(
  
          () => {
    
              
              return this.RequestResponse = "Registred with success";
  
          },
          (error) => {
            return  this.RequestResponse = error.error;
          }
  
        );
      
      

    } catch{
      return  this.RequestResponse =  "Something went wrong";
    }





  }
  

  login(loginData:FormGroup) {

    try{
      this.http.post("api/user/login",loginData.value).subscribe(
        (resp) => {
          
  
          localStorage.setItem('access_token', resp.auth_token);
          this.router.navigate(['/']);
           this.RequestResponse = "logged in";
      },
      (error) => {
    
           this.RequestResponse = error.error;
          
      }
  
       );
    } catch {
      this.RequestResponse = "something went wrong";
    }

  }





}

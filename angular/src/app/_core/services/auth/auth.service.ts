import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {HttpService} from '../../../_shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  RequestResponse;
  public currentUser: Observable<any>;
  private currentUserSubject: BehaviorSubject<any>;

  constructor(private router: Router,private http: HttpService ) { 

    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();

  }



  registerUser(registerData: FormGroup) {


    try{
        this.http.post("api/user/register", registerData.value).subscribe(
  
          () => {
             // return this.RequestResponse = "Registred with success";
              this.router.navigate(['/login']);
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
          
  
          localStorage.setItem('currentUser', JSON.stringify(resp));
          console.log(JSON.stringify(resp));
          this.currentUserSubject.next(resp.user);
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

  public get loggedinUser() {
    return this.currentUserSubject;
  }


  logout() {
    localStorage.removeItem('currentUser');
   
    this.router.navigate(['/login']);
    this.currentUser = null;
    this.RequestResponse = "logged out";
   
  }





}

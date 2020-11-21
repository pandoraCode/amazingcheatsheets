import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class WebClientService {
  readonly ROOT_API_URL;


  constructor(private http: HttpClient,private router: Router) { 
    this.ROOT_API_URL = "http://localhost:3000";
  }



  get(uri:string){
    
    return this.http.get(`${this.ROOT_API_URL}/${uri}`);

  }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
}

  post(uri:string, data: any): Observable<any>{
    
    let options = {
      responseType: 'text' as const,
    };

    return this.http.post(`${this.ROOT_API_URL}/${uri}`, data,options).pipe(catchError(this.handleError));
            

  }


  patch(uri:string, data: object){
    return this.http.patch(`${this.ROOT_API_URL}/${uri}`, data);

  }

  isValidInput(fieldName,form: FormGroup): boolean {
		return form.controls[fieldName].invalid &&
			(form.controls[fieldName].dirty || form.controls[fieldName].touched);
  }
  
  logout() {
    localStorage.removeItem('access_token');
    this.router.navigateByUrl('/');
  }

  public get loggedIn(): boolean{
    return localStorage.getItem('access_token') !==  null;
    
  }


}

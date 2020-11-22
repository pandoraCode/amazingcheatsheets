import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

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

}

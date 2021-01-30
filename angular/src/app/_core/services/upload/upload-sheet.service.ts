import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/_shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UploadSheetService {

  constructor(private router: Router,private http: HttpService) { }



  uploadSheet(sheetData: FormData){

   
    try{

  

      this.http.post("api/sheets/upload",sheetData).subscribe(

        (res) => {
          // return this.RequestResponse = "Registred with success";
          

          return true;
       
       },
       (error) => {
         console.log(error);
         return   error.error;
       }



  );

    }catch(err){
      console.log("there was an error");

      return err;

    }




  }


  getSheet(): Observable<any>{

          // console.log(this.http.get("api/sheets/getall").subscribe((res)=>{return res;}));
         return this.http.get("api/sheets/getall");
         }
  }


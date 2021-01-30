import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import {isValidInput} from '../../../_shared/utility/utility.functions';
import { Router } from '@angular/router';
import { UploadSheetService } from '../../services/upload/upload-sheet.service';

@Component({
  selector: 'app-upload-sheet',
  templateUrl: './upload-sheet.component.html',
  styleUrls: ['./upload-sheet.component.css']
})
export class UploadSheetComponent implements OnInit {

  uploadSheet : FormGroup;

  constructor(private auth: AuthService, private router: Router, private sheet:UploadSheetService) {

    //TODO: Add an AuthGuard
    console.log(!this.auth.loggedinUser.value);
    if (!this.auth.loggedinUser.value){this.router.navigate(['/login']);}
   }

  ngOnInit(): void {
    this.uploadSheet = new FormGroup({
      title: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required),
      tags: new FormControl('',Validators.required),
      document: new FormControl('',Validators.required),
    });
  
  }


  get isValidInput(){	return isValidInput;}





  public toFormData<T>( formValue: T ) {
    const formData = new FormData();
  
    for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
    }
  
    return formData;
  }
  

  private document;
  public uploadResponse;


  public onFileChange(event) {
 
    if (event.target.files && event.target.files.length) {
      this.document = event.target.files[0];
   

     

    }
  }

  onSubmit(){

    const userInfo = JSON.parse(localStorage.getItem('currentUser'));


  let formData: any = new FormData();

    formData.append("publisher_id",userInfo.user._id);
    formData.append("title", this.uploadSheet.get('title').value);
    formData.append("description", this.uploadSheet.get('description').value);
    formData.append("tags", this.uploadSheet.get('tags').value);
    formData.append("document", this.document);


   if (this.uploadSheet.valid){

        this.sheet.uploadSheet(formData);

        this.uploadResponse = "uploaded with success";


  
    }
      
		

  }

}

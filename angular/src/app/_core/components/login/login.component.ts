import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {isValidInput} from '../../../_shared/utility/utility.functions';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private auth: AuthService) { }


  loginForm : FormGroup;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    });
  
 
  }



  get isValidInput(){	return isValidInput;}
  get loginRes(){ return this.auth.RequestResponse};
  

  onSubmit(){

    if (this.loginForm.valid){
			this.auth.login(this.loginForm);
		}

  }

 


}

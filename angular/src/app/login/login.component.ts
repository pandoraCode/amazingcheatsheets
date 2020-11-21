import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WebClientService } from '../web-client.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  router: any;

  constructor(public api: WebClientService) { }


  loginForm : FormGroup;

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',Validators.required),
    });
  
 
  }

  loginResponse;
  isSubmitted =  false;

  login() {

    this.isSubmitted = true;
    // TODO: Use EventEmitter with form value
     this.api.post("api/user/login",this.loginForm.value).subscribe(
      (resp) => {
        console.log(resp);
        this.loginResponse = "logged in, Yeah";
        localStorage.setItem('access_token', resp.auth_token);
        this.router.navigate(['/']);
    },
    (error) => {
        console.log(error.error);
        this.loginResponse = error.error;
        
    }

     );
  }



}

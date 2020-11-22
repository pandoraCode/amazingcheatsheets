import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {isValidInput} from '../../../_shared/utility/utility.functions';


@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {


  registerForm: FormGroup;
  


   

	constructor(private auth: AuthService) {
		
	}

	ngOnInit(): void {

		const regexEmailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		this.registerForm = new FormGroup({
			email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(regexEmailFormat)]),
			password: new FormControl('', [Validators.required, Validators.minLength(6)]),
			name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z][a-zA-Z\\s]+$")]),
			areaOFexpertise: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z][a-zA-Z\\s]+$")]),
			avatar: new FormControl(''),
		});

		

	}

	get isValidInput(){	return isValidInput;}
	get registerRes(){ return this.auth.RequestResponse};


	onSubmit(){
		if (this.registerForm.valid){
			this.auth.registerUser(this.registerForm);
		}

	}

}
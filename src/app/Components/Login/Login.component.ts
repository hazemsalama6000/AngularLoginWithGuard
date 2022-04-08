import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { IResponse } from "src/app/Models/Reponse";
import { LoginService } from "src/app/Services/Login.service";
import { ILoginModel } from "../../Models/Login"

@Component(
	{
		selector: "Login",
		templateUrl: "./Login.component.html",
		styleUrls: ["./Login.component.scss"]
	}
)

export class LoginComponent {

	ErrorMessage: string
	@Output() LoginEmitter =new EventEmitter();
	constructor(private fb: FormBuilder, private LoginService: LoginService) { }

	LoginForm: FormGroup = this.fb.group({
		email: ['', Validators.required],
		password: ['', Validators.required]
	})

	LoginFun(LoginModel: ILoginModel) {
		this.LoginService.Login(LoginModel).subscribe(
			(data: IResponse) => {
				this.ErrorMessage=data.message;
				if(data.status==true){
			    	localStorage.setItem("token",data.data.token);   	
					this.LoginEmitter.emit();
				}
			});
	}

}
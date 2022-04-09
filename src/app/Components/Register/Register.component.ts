import { Component, EventEmitter, Output } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Register } from "src/app/Models/Register";
import { IResponse } from "src/app/Models/Reponse";
import { RegisterService } from "src/app/Services/Register.service";
import {emailCheckExistance} from "../../Validators/emailExistance.validator"
@Component({
	selector: "Register",
	templateUrl: './Register.component.html',
	styleUrls: ['./Register.component.scss']
})

export class RegisterComponent {

	@Output() LoginEmitter:any=new EventEmitter();
	Message: string;
	constructor(private fb: FormBuilder, private registerService: RegisterService) { }

	RegisterForm = this.fb.group({
		email: ['', [Validators.required], [emailCheckExistance]],
		password: ['', Validators.required],
		phone: ['', Validators.required],
		name: ['', Validators.required]
	})


	RegisterFun(RegisterModel: Register) {
		console.log(RegisterModel);
		this.registerService.Register(RegisterModel).subscribe(
			(data: IResponse) => {
				
					this.Message = data.message;
				console.log(data);
				if(data.status){
					localStorage.setItem('token', data.data.token);
					this.LoginEmitter.emit();
					console.log(localStorage.getItem('token'));
				}
			});
	}

}
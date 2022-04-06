import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Register } from "src/app/Models/Register";
import { RegisterService } from "src/app/Services/Register.service";

@Component({
	selector: "Register",
	templateUrl: './Register.component.html',
	styleUrls: ['./Register.component.scss']
})

export class RegisterComponent {


	constructor(private fb: FormBuilder, private registerService: RegisterService) { }

	RegisterForm = this.fb.group({
		email: ['', Validators.required],
		password: ['', Validators.required],
		phone: ['', Validators.required],
		name: ['', Validators.required]
	})


	RegisterFun(RegisterModel: Register) {
		console.log(RegisterModel);
		this.registerService.Register(RegisterModel).subscribe(
			(data)=>{console.log(data)
			});
	}

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Login } from "../Models/Login";

@Injectable({providedIn:"root"})

export class LoginService
{
constructor(private httpClient:HttpClient){}

CheckNameExistance_Validate(){

}

Login(Login:Login){
	
}

}
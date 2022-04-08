import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiPaths } from "../Enums/ApiPaths";
import { ILoginModel } from "../Models/Login";
import { IResponse } from "../Models/Reponse";

@Injectable({providedIn:"root"})

export class LoginService
{
constructor(private httpClient:HttpClient){}

CheckNameExistance_Validate(){

}

Login(Login:ILoginModel):Observable<IResponse>{
	return this.httpClient.post<IResponse>(environment.SourceUrl+ApiPaths.Login,Login)
}

}
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiPaths } from "../Enums/ApiPaths";
import { Register } from "../Models/Register";


@Injectable({
	providedIn:"root"
})

export class RegisterService 
{
constructor(private httpClient:HttpClient){}


checkEmailExistance(name:string){

}

Register(RegisterModel:Register):Observable<any>{
  return this.httpClient.post(environment.SourceUrl+ApiPaths.Register,RegisterModel)
}


}
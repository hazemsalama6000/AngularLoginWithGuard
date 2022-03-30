import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Route } from "@angular/router";
import { Register } from "../Models/Register";


@Injectable({
	providedIn:"root"
})

export class RegisterService 
{
constructor(private httpClient:HttpClient){}


checkNameExistance(name:string){

}

Register(RegisterModel:Register){


}


}
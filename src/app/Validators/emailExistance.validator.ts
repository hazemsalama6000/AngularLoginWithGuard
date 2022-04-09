import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { RegisterService } from "../Services/Register.service";


export function emailCheckExistance( control:AbstractControl )
{
   if(control.value =='sss'){
      return of({'emailExists':true}); 
   }else{
	   return of(null);
   }
}


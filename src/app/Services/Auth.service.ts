import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root"
})

export class AuthService  {

	isAuthenticatedUser() {
		if (localStorage.getItem('token')) {
			return true;
		}
		return false;
	}

}
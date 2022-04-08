import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
selector:'Header-C',
template:`
<mat-toolbar color="primary" class="d-flex justify-content-between">

<div>
	<button mat-fab (click)="Sidenav.open()">
	  <mat-icon>reorder</mat-icon>
	</button>
	 <span>My Application</span>
</div>

 <div class="">
	 <button class="btn btn-sm btn-danger mx-1" (click)="Logout()"> <i class="bi bi-door-closed-fill"></i> {{"LogOut"|translate}} </button>
	 <button class="btn btn-sm btn-danger mx-1" (click)="changeLang('ar')"><b>{{"ar"|translate}}</b></button>
	 <button class="btn btn-sm btn-primary mx-1" (click)="changeLang('en')"><b>{{"en"|translate}}</b></button>
 </div>

</mat-toolbar>`
})
export class HeaderComponent{
@Input() Sidenav:any;
@Output() langEvent=new EventEmitter();
@Output() LogoutEvent=new EventEmitter();

changeLang(lang:'ar'|'en'){
	this.langEvent.emit(lang);
}

Logout(){
	this.LogoutEvent.emit();
}

}
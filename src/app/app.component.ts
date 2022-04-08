import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoginOrNot } from './Enums/LoginEnum';
import { Config } from './Models/AccordionModels';
import { Menu } from './Models/AccordionModels/Menu';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
	currentLang: string;
	title = 'newsEgypt';
	Logintrue = LoginOrNot.NotLogin
	direction: 'rtl' | 'ltr';
	constructor(public translate: TranslateService) { }

	ngOnInit(): void {

	//	this.currentLang = localStorage.getItem('lang') || 'en'
		this.translate.use(this.currentLang);
		this.direction = this.currentLang == 'ar' ? 'rtl' : 'ltr'

		if (localStorage.getItem("token")) {
			this.Logintrue = LoginOrNot.Login;
			console.log('ss');
		}

	}

	LangChange(lang: 'ar' | 'en') {
		this.translate.use(lang);
		localStorage.setItem('lang', lang);
		this.direction = lang == 'ar' ? 'rtl' : 'ltr'
	}

	LoginFun() {
		this.Logintrue = LoginOrNot.Login;
	}

	LogOutFun(){
		localStorage.removeItem("token");
		this.Logintrue=LoginOrNot.NotLogin;
	}


}

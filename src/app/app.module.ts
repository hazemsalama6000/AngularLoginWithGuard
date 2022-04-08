import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Modules/SharedModule/SharedModule.module';
import { HeaderComponent } from './Components/Header/Header.component';
import { SideMenuComponent } from './Components/SideMenu/SideMenu.component';
import { LoggingService } from './Services/Logging.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './Services/Interceptors/AuthInterceptor.interceptor';
import { CachingInterceptor } from './Services/Interceptors/CachingInterceptor.interceptor';
import { ErrorInterceptor } from './Services/Interceptors/ErrorInterceptor.interceptor';
import { LoggingInterceptor } from './Services/Interceptors/LoggingInterceptor.interceptor';
import { NewsComponent } from './Components/News/News.component';
import { NewsCardComponent } from './Components/News/NewsCard/NewsCard.component';
import { MultilevelMenuService, NgMaterialMultilevelMenuModule,ɵb } from 'ng-material-multilevel-menu';
import { LoginComponent } from './Components/Login/Login.component';
import { RegisterComponent } from './Components/Register/Register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    NewsComponent,
    NewsCardComponent,
	LoginComponent,
	RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    NgMaterialMultilevelMenuModule,
	HttpClientModule,
	TranslateModule.forRoot({
		defaultLanguage:"en",
		loader:{
			provide:TranslateLoader,
			useFactory:httpLoaderFactory,
			deps:[HttpClient]
		}
	})
  ],
  providers: [
    LoggingService,ɵb ,MultilevelMenuService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }
  ,
   {
     provide:HTTP_INTERCEPTORS,
     useClass:LoggingInterceptor,
     multi:true
   },
  {
  provide:HTTP_INTERCEPTORS,
  useClass:CachingInterceptor,
  multi:true
  },
  {
    provide:HTTP_INTERCEPTORS,
    useClass:ErrorInterceptor,
    multi:true
  }

],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function httpLoaderFactory(http:HttpClient){
	return new TranslateHttpLoader(http,'../assets/i18n/','.json')
}


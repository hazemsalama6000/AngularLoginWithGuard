import { Component } from '@angular/core';
import { LoginOrNot } from './Enums/LoginEnum';
import { Config } from './Models/AccordionModels';
import { Menu } from './Models/AccordionModels/Menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  
})

export class AppComponent {
  title = 'newsEgypt';
  Logintrue=LoginOrNot.NotLogin
}

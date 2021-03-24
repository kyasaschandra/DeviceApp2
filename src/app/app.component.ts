import { LoginService } from './login.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeviceApp';
  logged;
  constructor( private loginService: LoginService){
    this.logged=this.loginService.logged;
  }

  onChange(x){
    this.logged = this.loginService.logged;
  }

 
}

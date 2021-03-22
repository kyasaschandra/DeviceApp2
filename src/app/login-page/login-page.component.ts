import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
 
  loginform: FormGroup;
  constructor(private loginItemService : LoginService, 
              private formBuilder: FormBuilder) { }


  logged = this.loginItemService.logged;
  permission = this.loginItemService.permission;
  ngOnInit(): void {

    this.loginform = this.formBuilder.group({
      username: this.formBuilder.control("",Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])),
      password: this.formBuilder.control("",Validators.compose([Validators.required,Validators.minLength(2),Validators.maxLength(30)])),
      
    });
  }


  onLogin(){
    console.log(this.loginform.value)
    this.loginItemService.login(this.loginform.value);
  }
}

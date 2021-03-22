import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
logged;
permission;
  constructor() { }
  loginItems = [
    {
      username: "Admin",
      password: "AdminLogin"
      
    },
    {
      username: "User",
      password: "UserLogin"
      
    }
];

permissionDetails = [
  {
  username: "Admin",
  permission: true
  },
{
  username: "User",
  permission: false
}
];

login(loginItem){}
}

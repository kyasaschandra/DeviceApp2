import { Injectable,Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
@Input() logged = false;
permission = false;
  constructor() {localStorage.setItem("logged",JSON.stringify(this.logged)); }
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

login(loginItem){
  console.log(loginItem);
  console.log(this.loginItems);
  
  var index = this.loginItems.indexOf(loginItem);
  console.log(index);
  
  if (index>=0){
    this.logged = true;
    this.permission = this.permissionDetails[index]['permission']
  }
  else{
    this.logged= false;
  }
  localStorage.removeItem("logged");
  localStorage.setItem("logged",JSON.stringify(this.logged));
  console.log([this.logged,this.permission]);
  
  return [this.logged,this.permission];
}

}

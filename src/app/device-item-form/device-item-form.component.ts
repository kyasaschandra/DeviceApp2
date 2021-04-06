import { LoginService } from './../login.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DeviceItemService } from '../device-item.service';
import {lookupListToken} from '../providers';


@Component({
  selector: 'app-device-item-form',
  templateUrl: './device-item-form.component.html',
  styleUrls: ['./device-item-form.component.scss']
})
export class DeviceItemFormComponent implements OnInit {
  form: FormGroup;
  New=false;
  logged = this.loginService.logged;

  

  constructor(private formBuilder: FormBuilder,
    private deviceItemService: DeviceItemService,
    @Inject(lookupListToken) public lookupLists,
    private loginService:LoginService) {}

   

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: this.formBuilder.control("Device",Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                                        ,Validators.required,Validators.minLength(2),Validators.maxLength(20)])),
      OsType: this.formBuilder.control(null),
      Battery: this.formBuilder.control(null),
      Memory: this.formBuilder.control(null)
    });

    
  }
  
  onSubmit(deviceItem){
    console.log(deviceItem);
    var jsonFormat = {
                      Id : deviceItem.Id,
                      Name : deviceItem.Name,
                      OsType : deviceItem.OsType,
                      Battery : deviceItem.Battery,
                      Memory : deviceItem.Memory
                      }
    this.deviceItemService.add(jsonFormat).subscribe(res=>{
      alert(res.toString());
    });
    this.New = false;
  }

  onNew(){
    this.New=true;
  }

  onLogout(){
    this.logged = false;
  }
}

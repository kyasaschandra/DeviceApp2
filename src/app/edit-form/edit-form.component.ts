import { DeviceItemService } from './../device-item.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import {lookupListToken} from '../providers';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  editform : FormGroup;
  x;
  called = false;
  constructor( private formBuilder: FormBuilder,
    @Inject(lookupListToken) public lookupLists,
    private deviceItemService:DeviceItemService) { 
      this.editform = this.formBuilder.group({
        name: this.formBuilder.control('',Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                        ,Validators.required,Validators.minLength(2),Validators.maxLength(20)])),
        OsType: this.formBuilder.control(''),
        battery: this.formBuilder.control(''),
        memory: this.formBuilder.control('')
      });     
     }

  ngOnInit(): void {
    
  }

  onEditItem(Item){
    console.log("onEditItem");    
    this.editform.get('name').setValue(Item.name)
    this.editform.get('OsType').setValue(Item.OsType)
    this.editform.get('battery').setValue(Item.battery)
    this.editform.get('memory').setValue(Item.memory)
    this.x = Item;
  }



  onEditItemSend(ItemFromForm){    
    
    this.called = false;
    this.deviceItemService.edit(this.x,ItemFromForm);}
}

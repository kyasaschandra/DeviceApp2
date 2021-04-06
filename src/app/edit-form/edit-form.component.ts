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
        Name: this.formBuilder.control('',Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                        ,Validators.required,Validators.minLength(2),Validators.maxLength(20)])),
        OsType: this.formBuilder.control(''),
        Battery: this.formBuilder.control(''),
        Memory: this.formBuilder.control('')
      });     
     }

  ngOnInit(): void {
    
  }

  onEditItem(Item){
    console.log("onEditItem");    
    this.editform.get('Name').setValue(Item.Name)
    this.editform.get('OsType').setValue(Item.OsType)
    this.editform.get('Battery').setValue(Item.Battery)
    this.editform.get('Memory').setValue(Item.Memory)
    this.x = Item;
  }



  onEditItemSend(ItemFromForm){    
    
    this.called = false;

    this.deviceItemService.edit(ItemFromForm).subscribe(data=>{
      alert(data.toString());
    });}
}

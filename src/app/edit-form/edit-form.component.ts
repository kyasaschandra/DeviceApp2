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
  constructor(@Inject(lookupListToken) public lookupLists, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  onEditItem(Item){
    this.editform = this.formBuilder.group({
      name: this.formBuilder.control(Item.name,Validators.compose([Validators.pattern('[\\w\\-\\s\\/]+')
                                                        ,Validators.required,Validators.minLength(2),Validators.maxLength(20)])),
      OsType: this.formBuilder.control(Item.OsType),
      battery: this.formBuilder.control(Item.battery),
      memory: this.formBuilder.control(Item.memory)
    });

  }
}

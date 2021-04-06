import { EditFormComponent } from './../edit-form/edit-form.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DeviceItemService } from '../device-item.service';


@Component({
  selector: 'app-device-item-list',
  templateUrl: './device-item-list.component.html',
  styleUrls: ['./device-item-list.component.scss']
})
export class DeviceItemListComponent implements OnInit {
  deviceItems:any=[];
  @ViewChild(EditFormComponent) editFormComponent
  constructor(private deviceItemService: DeviceItemService) { }

  ngOnInit(): void {
    this.refreshList();
  }
  
refreshList(){
  this.deviceItemService.get().subscribe(data=>{
    this.deviceItems=data;
  })
}
  onDeviceItemDelete(deviceItem){
    this.deviceItemService.delete(deviceItem); 
  }

  onDeviceItemEdit(deviceItem){
    this.editFormComponent.called = true;
    this.editFormComponent.onEditItem(deviceItem);
    
  }



}

import { LoginService } from './login.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from "@angular/forms"

import { BatteryLevel } from './battery.directive';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DeviceItemFormComponent } from './device-item-form/device-item-form.component';
import { DeviceItemComponent } from './device-item/device-item.component';
import { DeviceItemListComponent } from './device-item-list/device-item-list.component';
import { lookupListToken, lookupLists } from './providers';
import { EditFormComponent } from './edit-form/edit-form.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent, 
    DeviceItemFormComponent, 
    DeviceItemComponent, 
    DeviceItemListComponent,
    BatteryLevel,
    EditFormComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [ {provide: lookupListToken,useValue: lookupLists} ],
  bootstrap: [AppComponent]
})
export class AppModule { }

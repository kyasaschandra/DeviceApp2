import { LoginPageComponent } from './login-page/login-page.component';
import { DeviceItemFormComponent } from './device-item-form/device-item-form.component';
import { DeviceItemListComponent } from './device-item-list/device-item-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes=[
    {path:'deviceInfo',component:DeviceItemListComponent},
    {path:'addDevice',component:DeviceItemFormComponent},
    {path:'login',component:LoginPageComponent}

];

@NgModule({
    
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
import { Device } from './device';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DeviceItemService {
  deviceItems;
  readonly url = "http://localhost:58893/api";
  
  constructor(private http:HttpClient){

    
  }

  
  
  get():Observable<any[]>{
    return this.http.get<any>(this.url + '/Device')
  }

  add(deviceItem:any){
   return this.http.post(this.url + '/Device/',deviceItem);   
  }

  delete(deviceid:any){  
    return this.http.delete(this.url + '/Device/' +deviceid);  
  }

  edit(deviceItem:any){ 
   return this.http.put(this.url + '/Device/',deviceItem);       
  }

}

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
  // deviceItems = [
  //   {
  //     name: "Device 1",
  //     OsType: "Windows",
  //     battery : 100,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 2",
  //     OsType: "Windows",
  //     battery : 100,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 3",
  //     OsType: "Windows",
  //     battery : 10,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 4",
  //     OsType: "Windows",
  //     battery : 50,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 5",
  //     OsType: "Windows",
  //     battery : 75,
  //     memory:"4 GB"
  //   },
  //   {
  //     name: "Device 6",
  //     OsType: "Windows",
  //     battery : 100,
  //     memory:"4 GB"
  //   }
  // ];
  constructor(private http:HttpClient){

    //this.deviceItems=JSON.parse(localStorage.getItem("Devices"));
    //localStorage.setItem("Devices",JSON.stringify(this.deviceItems))
  }

  
  
  get():Observable<any[]>{
    //this.deviceItems = JSON.parse(localStorage.getItem("Devices"));
    var result = this.http.get<any>(this.url + '/Device')
    for(var i in result){
      console.log(i);
    }
    console.log(result);
    
    return this.deviceItems;
  }

  add(deviceItem:any){
    //this.deviceItems = JSON.parse(localStorage.getItem("Devices"));
    // this.deviceItems.push(deviceItem);
    // localStorage.removeItem("Devices");
    // localStorage.setItem("Devices",JSON.stringify(this.deviceItems));

    // const httpOptions = {headers: new HttpHeaders({'Content-Type':'application/json'})};
    this.http.post(this.url + '/Device/',deviceItem);  
    // deviceItem, httpOptions);  
  }

  delete(deviceid:any){
    //this.deviceItems = JSON.parse(localStorage.getItem("Devices"));
    // var index = this.deviceItems.indexOf(deviceItem);
    // this.deviceItems.splice(index,1)
    // localStorage.removeItem("Devices");
    // localStorage.setItem("Devices",JSON.stringify(this.deviceItems));
//     const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
     this.http.delete(this.url + '/Device/' +deviceid);  
//  httpOptions); 

  }

  edit(deviceItem:any){
    //    console.log(deviceItem);
    //    console.log(Item);
    //    var index = this.deviceItems.indexOf(deviceItem);
    //    if(index>=0){
    //      this.deviceItems[index]=Item;
    //    }
    //    localStorage.removeItem("Devices");
    // localStorage.setItem("Devices",JSON.stringify(this.deviceItems));
    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    this.http.put(this.url + '/Device/',deviceItem);  
    // Item, httpOptions); 
       
       
  }

}

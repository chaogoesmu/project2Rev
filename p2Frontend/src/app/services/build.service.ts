import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  order:Order = new Order(-1,-1,-1,-1,"nothing","nothing","nothing");
  orders:Order[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  getAllBuilds(){
    this.http.get<Order[]>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders").toPromise().then((response)=>{
      console.log(response);
      
      if(!(response === null)){
        this.orders = response;
      }
    });
  }

  getBuild(id:number){
    this.http.get<Order>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/" + id).toPromise().then((response)=>{
      console.log(response);
      
      if(!(response === null)){
        this.order = response;
      }
    });
  }
  createBuilds(build:string, status:string, requestdetails:string){
    this.http.post("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders", JSON.stringify(new Order(-1,-1,-1,-1,build,status,requestdetails)), this.httpOptions).toPromise().then((response)=>{
      //console.log(response);
      
      if(!(response === null)){
        console.log(response);
      }
    });
  }

  updateBuild(order:Order){
    this.http.put("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders", JSON.stringify(order), this.httpOptions).toPromise().then((response)=>{
      //console.log(response);
      
      if(!(response === null)){
      }
    });
  }

  

  
  constructor(private http:HttpClient) { }
}

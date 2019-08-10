import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class BuildService {

  order:Order = new Order(-1,-1,-1,-1,"nothing","nothing","nothing");

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  getAllBuilds():Promise<Order[]>{
    return this.http.get<Order[]>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders").toPromise();
  }

  getBuildByBuildId(bid:number):Promise<Order>{
    return this.http.get<Order>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/" + bid).toPromise();
  }
  getBuildsByUserId(uid:number):Promise<Order[]>{
    return this.http.get<Order[]>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/requester/" + uid).toPromise();

  }
  getBuildByAssemblerId(aid:number):Promise<Order>{
    return this.http.get<Order>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/assembler/" + aid).toPromise();

  }
  getBuildByQuartermasterId(qid:number):Promise<Order>{
    return this.http.get<Order>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/quartermaster/" + qid).toPromise();

  }

  createBuilds(quatermasterid:number, userid:number, assemblerid:number, build:string, status:string, requestdetails:string):Promise<any>{
    return this.http.post("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders", JSON.stringify(new Order(-2,quatermasterid,userid,assemblerid,build,status,requestdetails)), this.httpOptions).toPromise();
  }

  updateBuild(order:Order):Promise<any>{
    return this.http.put("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders", JSON.stringify(order), this.httpOptions).toPromise();
  }
  deleteBuild(bid:number):Promise<any>{
    return this.http.delete("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/orders/" + bid).toPromise();
  }
  

  
  constructor(private http:HttpClient) { }
}

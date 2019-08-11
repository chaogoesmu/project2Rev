import { Injectable, OnChanges, Output } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService{

  public user:User = new User(0,"nothing","nothing","nothing");

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient, private router:Router) { }

  loginUser(username:string, password:string){
    this.http.post<User>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/login", JSON.stringify(new User(0, username, password, "user")), this.httpOptions).toPromise().then((response)=>{
      
      if(!(response === null)){
        this.user = response;
        this.router.navigate(["/"]);
      }
    });
    
  }

  logout(){
    this.user = new User(0,"nothing","nothing","nothing")
  }


}

import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  user;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  loginUser(username:string, password:string){
    this.user = new User(-1, username, password, "user");
    this.http.post("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/login", JSON.stringify(this.user), this.httpOptions).toPromise().then((response)=>{
      this.user = response;
      console.log(response);
    });
  }

  getUser():User{
    console.log(this.user);
    return this.user;
  }

}

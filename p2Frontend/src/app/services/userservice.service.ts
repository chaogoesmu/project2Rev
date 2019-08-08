import { Injectable, OnChanges, Output } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService{

  user:User;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient, private router:Router) { }

  loginUser(username:string, password:string){
    this.user = new User(-1, username, password, "user");
    this.http.post<User>("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/login", JSON.stringify(this.user), this.httpOptions).toPromise().then((response)=>{
      this.user = response;
      console.log(response);
      
      if(response === null){

      }else{
        if (this.user.title === "user"){
          this.router.navigate(["/usercomp"]);
        }
      }
    });
    
  }

  getUser():User{
    console.log(this.user);
    return this.user;
  }

}

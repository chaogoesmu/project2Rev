import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  username:string;
  password:string;
  cpassword:string;
  confirm:string;
  user;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };




  onSubmit(){
    if (this.cpassword === this.password){
      this.user = new User(-1,this.username, this.password, "user");
      this.http.post("http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/users", JSON.stringify(this.user), this.httpOptions).toPromise().then((response)=>{
        console.log(response);

      });

    }

  }
  check(){
    if (this.cpassword != this.password){
      this.confirm = "NO!"
    }
    else{
      this.confirm = "";
    }
  }

}

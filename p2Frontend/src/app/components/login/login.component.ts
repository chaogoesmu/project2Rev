import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';
import { I18nSelectPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private us: UserserviceService, private router:Router) { }

  ngOnInit() {
  }
  username = "";
  password = "";
  error: string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  onSubmit() {
    this.us.loginUser(this.username, this.password).then((response)=>{
      if(!(response === null)){
        this.us.user = response;
        this.error = "";

        this.router.navigate(["/"]);
      }
      else{
        this.error = "Invalid login";

      }
    });
  }

}

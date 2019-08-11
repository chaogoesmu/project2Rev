import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private us: UserserviceService) { }

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
    this.us.loginUser(this.username, this.password);
    if (this.us.user.title === "nothing") {
      this.error = "Invalid login";
    }
    else {
      this.error = "";
    }
  }

}

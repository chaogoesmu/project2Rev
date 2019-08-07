import { Component } from '@angular/core';
import { User } from './models/user';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "A Team Computing";
  user:User;
  job:string;

constructor(private us:UserserviceService){
  if (us.getUser()){
    this.user = us.getUser();
    console.log(this.user);
    if (this.user.title === "user"){
      this.job = "user";
      console.log(this.job);
    }
    if (this.user.title === "quartermaster"){
      this.job = "quartermaster";
    }
    if (this.user.title === "assembler"){
      this.job = "assembler";
    }
  }
}

ngOnInit(){
  if (this.us.getUser()){
    this.user = this.us.getUser();
    console.log(this.user);
    if (this.user.title === "user"){
      this.job = "user";
      console.log(this.job);
    }
    if (this.user.title === "quartermaster"){
      this.job = "quartermaster";
    }
    if (this.user.title === "assembler"){
      this.job = "assembler";
    }
  }
}

}

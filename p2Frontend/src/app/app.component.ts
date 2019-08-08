import { Component, OnChanges, Input } from '@angular/core';
import { User } from './models/user';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ['user']
})
export class AppComponent implements OnChanges {
  title = "A Team Computing";
  job:string;
  @Input() user : User;

constructor(private us:UserserviceService){
}

ngOnInit(){
  this.user = this.us.getUser();
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

ngOnChanges() {
  console.log("yes");
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

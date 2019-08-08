import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user:User
  job:string;

  constructor(private us:UserserviceService) { }

  ngOnInit() {
    console.log("yes");
    if (this.us.getUser().title === "user"){
      this.job = "user";
      console.log(this.job);
    }
    if (this.us.getUser().title === "quartermaster"){

    }
    else{
      this.job ="";
    }


  }

}

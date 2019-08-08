import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private us:UserserviceService) { }

  ngOnInit() {
    console.log(this.us.user);
  }

}

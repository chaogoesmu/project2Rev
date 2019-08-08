import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private us:UserserviceService) { }

  ngOnInit() {
  }

}

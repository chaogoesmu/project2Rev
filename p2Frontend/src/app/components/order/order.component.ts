import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private us : UserserviceService) { }
  options:boolean = true;
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { BuildService } from '../../services/build.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-quartermaster',
  templateUrl: './quartermaster.component.html',
  styleUrls: ['./quartermaster.component.css']
})
export class QuartermasterComponent implements OnInit {

  constructor(private us:UserserviceService, private bs:BuildService) { }
  orders:Array<Order> = [];

  ngOnInit() {
    this.viewBuilds();
  }
  updateOrder(order:Order){
    this.bs.updateBuild(order).then((response)=>{
      this.viewBuilds();
    });
  }
  viewBuilds(){
    this.bs.getAllBuilds().then((response) =>{
      this.orders = response;
    });
    }

}

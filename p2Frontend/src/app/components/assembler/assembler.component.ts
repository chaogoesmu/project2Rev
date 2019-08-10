import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { BuildService } from '../../services/build.service';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-assembler',
  templateUrl: './assembler.component.html',
  styleUrls: ['./assembler.component.css']
})
export class AssemblerComponent implements OnInit {
  orders:Array<Order> = [];

  constructor(private bs:BuildService, private us:UserserviceService) { 
  }
  
  ngOnInit() {
    this.viewBuilds();
  }

  assemble(orderId:number){
    this.bs.getBuildByBuildId(orderId).then((response)=>{
      let order:Order = response;
      order.status = "Finished";
      this.bs.updateBuild(order).then((response) =>{
        this.viewBuilds();
      });
    });
  }
  viewBuilds(){
    this.bs.getAllBuilds().then((response) =>{
      this.orders = response;
    });
    }

}

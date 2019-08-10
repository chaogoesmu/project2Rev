import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { BuildService } from '../../services/build.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private us: UserserviceService, private bs: BuildService) { }
  builds: Array<Order> = [];
  ngOnInit() {
    this.bs.getBuildsByUserId(this.us.user.id).then(
      (response) => {
        this.builds = response;
      }
    );
  }

  delete(id: number) {
    this.bs.deleteBuild(id).then( () => {
    this.bs.getBuildsByUserId(this.us.user.id).then(
      (response) => {
        this.builds = response;
      }
    );}
    );
  }
}

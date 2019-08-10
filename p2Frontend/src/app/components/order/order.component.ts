import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BuildService } from '../../services/build.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private http: HttpClient, private us: UserserviceService, private bs: BuildService) { }
  options = true;
  req: string = "";
  cpu: string = "";
  gpu: string = "";
  ram: string = "";
  sdd: string = "";
  hdd: string = "";
  os: string = "";
  status: string = "";
  submitted: boolean = false;
  message: string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  ngOnInit() {
    this.submitted = false;
  }

  submitez() {
    this.submitted = true;
    this.bs.createBuilds(0, this.us.user.id, 0, this.req, "pending approval", this.req).then((response) => {
      console.log(response);
      //let jsr = JSON.parse(response);
      if (!(response === null)) {
        this.status = "success";
        this.message = "Sent your request.";
      } else {
        this.status = "failure";
        this.message = "There was an error creating your request. Please try again.";
      }
    });
    return false;

  }
  submitadv() {
    this.submitted = true;
    this.gpu = this.gpu == "" ? "unset" : this.gpu;
    this.cpu = this.cpu == "" ? "unset" : this.cpu;
    this.ram = this.ram == "" ? "unset" : this.ram;
    this.sdd = this.sdd == "" ? "unset" : this.sdd;
    this.hdd = this.hdd == "" ? "unset" : this.hdd;
    this.os = this.os == "" ? "unset" : this.os;

    let req = "CPU: " + this.cpu + "\nGPU: " + this.gpu + "\n" + this.ram + "\nSDD: " + this.sdd + "\nHDD: " + this.hdd + "\nOS: " + this.os;

    this.bs.createBuilds(0, this.us.user.id, 0, req, "pending approval", req).then((response) => {
      console.log(response);
      if (!(response === null)) {
        this.status = "success";
        this.message = "Your request was made successfully.";
      } else {
          this.status = "failure";
          this.message = "There was an error creating your request. Please try again.";
      }
      this.submitted = false;
    });
  }
}

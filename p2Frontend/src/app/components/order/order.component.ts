import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../services/userservice.service';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private http: HttpClient, private us: UserserviceService) { }
  options = true;
  req: string = "";
  cpu: string = "";
  gpu: string = "";
  ram: string = "";
  sdd: string = "";
  hdd: string = "";
  os: string = "";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  ngOnInit() {
  }

  submitez() {
    let obj = {"b_id": 0, "partList": this.req};
    let json = JSON.stringify(obj);
    //let json = '{\"b_id\": 0, \"partList\": \"' + this.req.split('"').join('\"') + '\"}';
    //console.log(json);
    //return false;
    // tslint:disable-next-line: max-line-length
    this.http.post('http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/builds', json, this.httpOptions).toPromise().then((response) => {
      console.log(response);
      //let jsr = JSON.parse(response);
      if (!(response === null)) {
        alert("request created! your build id is " + response.b_Id);
      }
    });
    return false;
  }
  submitadv() {
    // tslint:disable-next-line: max-line-length
    // {"build": "string"}
    //let json = "{}
    this.gpu = this.gpu == "" ? "unset" : this.gpu;
    this.cpu = this.cpu == "" ? "unset" : this.cpu;
    this.ram = this.ram == "" ? "unset" : this.ram;
    this.sdd = this.sdd == "" ? "unset" : this.sdd;
    this.hdd = this.hdd == "" ? "unset" : this.hdd;
    this.os = this.os == "" ? "unset" : this.os;

    let req = "CPU: " + this.cpu + "\nGPU: " + this.gpu + "\n" + this.ram + "\nSDD: " + this.sdd + "\nHDD: " + this.hdd + "\nOS: " + this.os;
    let obj = {"b_id": 0, "partList": req};
    let json = JSON.stringify(obj);

    // tslint:disable-next-line: max-line-length
    this.http.post('http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/builds', json, this.httpOptions).toPromise().then((response) => {
      console.log(response);
      if (!(response === null)) {
        alert("request created! your build id is " + response.b_Id);
      }
    });
  }
}

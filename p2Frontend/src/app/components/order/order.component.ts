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

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  ngOnInit() {
  }

  submitez() {
    // tslint:disable-next-line: max-line-length
    this.http.post('http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/builds', this.req, this.httpOptions).toPromise().then((response) => {
      console.log(response);
      if (!(response === null)) {

      }
    });
    return false;
  }
  submitadv() {
    // tslint:disable-next-line: max-line-length
    // {"build": "string"}
    //let json = "{}
    
    let req = "CPU: " + this.cpu + "\nGPU: " + this.gpu + "\n" + this.ram + "\nSDD: " + this.sdd;
    // tslint:disable-next-line: max-line-length
    this.http.post('http://ec2-3-16-22-70.us-east-2.compute.amazonaws.com:9999/builds', req, this.httpOptions).toPromise().then((response) => {
      console.log(response);
      if (!(response === null)) {

      }
    });
  }
}

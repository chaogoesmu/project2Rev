import { Component, OnChanges, Input } from '@angular/core';
import { User } from './models/user';
import { UserserviceService } from './services/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  inputs: ['user']
})
export class AppComponent {
  title = "A Team Computing";
 
constructor(private us:UserserviceService){
}


}

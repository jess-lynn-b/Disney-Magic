import { Component } from '@angular/core';
import { Welcome } from '../shared/models/welcome.model';
import { welcomeService } from '../welcome-page/welcome.service';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
 public title: string;
 public details: string;
 public location: string;
 public welcomeData: Welcome[];

 constructor (
  private welcome:
  welcomeService){
    this.title = 'title',
    this.details = 'details';
    this.location = 'location';
    this.welcomeData = [];
  }
  ngOnInit(){
    this.welcomeData = this.welcome.getData();
  }
}

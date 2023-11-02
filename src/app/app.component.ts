import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 title = 'Disney-Magic-Project';
 nav = 'rotate-dining';

 constructor() {

 }
 ngOnInit() {

 }
 changeTab($event: string) {
  this.nav = $event;
 }
}

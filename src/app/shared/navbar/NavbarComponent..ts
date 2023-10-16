import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() navEmit: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit (){

   }

   emitNav(tab: string) {
    this.navEmit.emit(tab);
   }
}

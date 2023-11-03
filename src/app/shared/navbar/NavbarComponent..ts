import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpService } from '../services/http.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  @Output() navEmit: EventEmitter<string> = new EventEmitter<string>();
  constructor(private httpService: HttpService) { }

  ngOnInit (){

   }
    onExpand(){
      
    }
   emitNav(tab: string) {
    this.navEmit.emit(tab);
   }
   onSaveData(){
    this.httpService.saveCasualToFirebase();
   }
   onFetchData(){
    this.httpService.fetchCasualFromFirebase();
   }
}

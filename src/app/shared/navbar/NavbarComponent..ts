import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
isAuthenticated = false;
private userSub: Subscription | undefined;

@Output() navEmit: EventEmitter<string> = new EventEmitter<string>();
  dataStorageService: any;

  constructor(
    private httpService: HttpService,
    private authService: AuthService) { }

  ngOnInit (){
    this.userSub = this.authService.currUser.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
   }

   emitNav(tab: string) {
    this.navEmit.emit(tab);
   }
   onSaveData(){
    this.httpService.saveCasualToFirebase();
    this.dataStorageService.storeCasual();
   }
   onFetchData(){
    this.httpService.fetchCasualFromFirebase()
    .unsubscribe();
   }
   onSignOut() {
    this.authService.signOut();
   }

}

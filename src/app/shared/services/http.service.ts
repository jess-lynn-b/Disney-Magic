import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { CasualDiningService } from 'src/app/Casual-Food/casual.service';
import { environment } from 'src/environments/environment.development';
import { CasualDine } from '../models/casual-dine.model';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly firebaseRootURL =
  "https://disney-magic-7adfe-default-rtdb.firebaseio.com/favorite.json/casual.json"

  constructor(
    private http: HttpClient,
    private casualDiningService: CasualDiningService) {}

  saveCasualToFirebase(){
    const CasualDine = this.casualDiningService.getData();
    this.http.put(this.firebaseRootURL, CasualDine).subscribe(res => {
      console.log("Firebase DB Response:", res);
    });
  }

  fetchCasualFromFirebase(){
    return this.http
      .get(this.firebaseRootURL, {})
      .subscribe((data)=>{
        console.log("From response:", data);
      })
  }
}

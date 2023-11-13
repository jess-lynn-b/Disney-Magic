import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, tap } from "rxjs";
import { User } from "./user.model";
import { environment } from "src/environments/environment.development";

const FIREBASE_WEB_API_KEY =  environment.firebaseApiKey;
const FIREBASE_SIGN_UP_URL =`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_WEB_API_KEY}`;
const FIREBASE_SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_WEB_API_KEY}`;

export interface AuthReqData{
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface AuthResData {
  kind: string;
  idToken: string;
  password: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered? : boolean;
}

@Injectable({providedIn: 'root'})

export class AuthService {
  currUser= new BehaviorSubject<User | null>(null);

  private tokenExpirationTimer: any;

  constructor(
    private http: HttpClient,
    private router: Router){}

  signUpWithEmailPassword(authData: AuthReqData){
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<AuthResData>(FIREBASE_SIGN_UP_URL, {
        ...authData,
        returnSecureToken: true,
      })
   .pipe(
     tap((res) => {
       const { email, localId, idToken, expiresIn} = res;

       this.handleAuthentication(email, localId, idToken, +expiresIn);
     })
   );
   return authRes;
  }
  handleAuthentication(email: string, localId: string, idToken: string, arg3: number) {
    throw new Error("Method not implemented.");
  }
  loginWithEmailPassword(authData: AuthReqData) {
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<AuthResData>(FIREBASE_SIGN_IN_URL, {
        ...authData,
        returnSecureToken: true,
      })
    .pipe(
      tap((res) => {
        const {email, localId, idToken, expiresIn} = res;

        this.handleAuth(email, localId, idToken, +expiresIn);
      })
    );
    return authRes;
  }

  signOut(){
    this.currUser.next(null);
    this.router.navigate(['auth']);
  }

  autoLoginFromLocalStorage(){
    const userData = localStorage.getItem('userData');

    if (!userData) {
      return;
    }
    const loadedUser: {
      id: string;
      email: string;
      _token: string;
      _tokenExperationDate: string;
    } = JSON.parse(userData);

    const newUser = new User (
      loadedUser.id,
      loadedUser.email,
      loadedUser._token,
      new Date(loadedUser._tokenExperationDate)
    );

    if (newUser.token) {
      this.currUser.next(newUser);

    const expDuration =
      new Date(loadedUser._tokenExperationDate).getTime() - new Date().getTime();

    this.autoSignOut(expDuration);
    }
  }

  autoSignOut(expDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.signOut();
    }, expDuration);
  }
  private handleAuth(
    email: string,
    userId: string,
    token: string,
    expiresIn: number,
  ) {
    const expirationDate = new Date (
      new Date().getTime() + expiresIn * 1000
    );
    const newUser = new User (
      userId,
      email,
      token,
      expirationDate);

    this.currUser.next(newUser);

    this.autoSignOut(expiresIn * 1000);

    localStorage.setItem('userData', JSON.stringify(newUser));

  }
}


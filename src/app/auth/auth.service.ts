import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, tap } from "rxjs";
import { throwError } from "rxjs";
import { Router } from "@angular/router";
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
  currUser = new BehaviorSubject<User>(null!);
  private tokenExpirationTimer: any;


  constructor(
    private http: HttpClient,
    private router: Router){

    }

  signUpWithEmailPassword(authData: AuthReqData){
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<AuthResData>(FIREBASE_SIGN_UP_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {


          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn);
        })
      );
      return authRes;
  }
  loginWithEmailPassword(authData: AuthReqData) {
    if (!authData.email || !authData.password) return;

    const authRes = this.http
      .post<AuthResData>(FIREBASE_SIGN_IN_URL, {
        ...authData,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {

          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn);
        })
      );
      return authRes;
  }

  autoLoginFromLocalStorage(){
    const userData = localStorage.getItem('userData');
     if (!userData) return;

      const lsUser: {
        id: string;
        email: string;
        _token: string;
        _tokenExpDate: string;
      } = JSON.parse(userData);

      const newUser = new User (
        lsUser.id,
        lsUser.email,
        lsUser._token,
        new Date(lsUser._tokenExpDate)
      );

      if (newUser.token) {
        this.currUser.next(newUser);

    //  const expDuration =
    //    new Date (lsUser._tokenExpDate).getTime() - new Date().getTime();
    //  this.autoSignOut(expDuration);
      }
    }

  //  autoSignOut(expDuration: number) {
  //    this.tokenExpirationTimer = setTimeout(() => {
  //      this.signOut();
  //    }, expDuration);//
  //  }
  signOut() {
    throw new Error("Method not implemented.");
  }

    private handleAuthentication(
      email: string,
      userId: string,
      token: string,
      expiresIn: number,
    ) {
      const expirationDate = new Date(
        new Date().getTime() +expiresIn * 1000
      );
      const user = new User(
        email,
        userId,
        token,
        expirationDate
      );
      this.currUser.next(user);
      this.autoLoginFromLocalStorage();
      localStorage.setItem('userData', JSON. stringify(user));
    }

    private handleError(errorRes: HttpErrorResponse) {
      let errorMessage = 'An unknown error occured!';
      if (!errorRes.error || !errorRes.error.error) {
        return throwError(errorMessage);
      }
      switch (errorRes.error.error.message) {
        case 'EMAIL_PASSWORD':
          errorMessage = 'Ugh, Oh!! This email or password is invaild!'
      }
      return throwError(errorMessage);
    }
}


function autoSignOut(expDuration: any, number: any) {
  throw new Error("Function not implemented.");
}

function signOut() {
  throw new Error("Function not implemented.");
}




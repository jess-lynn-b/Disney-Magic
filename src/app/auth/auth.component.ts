import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResData } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  exportAs: 'ngForm'
})
export class AuthComponent {
  isLoginMode = true;
  errorMsg: string | null = null;


  constructor(
    private authService: AuthService,
    private router: Router,
    public authObsv: Observable <AuthResData>,
    ){}

  onSubmit(form: NgForm) {

      const { email, password } = form.value;

      if (!form.valid || !email || !password) return;

      if(this.isLoginMode){
         this.authService.loginWithEmailPassword({
          email,
          password,
        });
      } else {
         this.authService.signUpWithEmailPassword({
          email,
          password,
        });
      }

      this.authObsv.subscribe ({
        next: (data) => {
          console.log(data);

          this.router.navigate(['Welcome']);
        },

        error: (res: HttpErrorResponse) => {
          console.log(res);
          this.errorMsg = res?.error?.error?.message || 'Something went wrong!';
        },
        complete: () => {
          console.log('Complete!');
          form.reset();
        },
      });
  }

    toggleAuthMode() {
      this.isLoginMode = !this.isLoginMode;
    }
}

import { Component, ComponentFactoryResolver, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResData } from "./auth.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { PlaceholderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  exportAs: 'ngForm'
})
export class AuthComponent implements OnDestroy{
  isLoginMode = true;
  errorMsg: string | null = null;
  authObsv: Observable<AuthResData> | any;
  error: string | null = null;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost!: PlaceholderDirective;

  private closeSub!: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
    ){}

  onSwitchMode() {
      this.isLoginMode = !this.isLoginMode;
    }

  onSubmit(form: NgForm) {

      const { email, password } = form.value;

      if (!form.valid || !email || !password) return;

      if(this.isLoginMode){
        this.authObsv =
         this.authService.loginWithEmailPassword({
          email,
          password,
        });
      } else {
        this.authObsv =
         this.authService.signUpWithEmailPassword({
          email,
          password,
        });
      }

      this.authObsv.subscribe ({
        next: (data: any) => {
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
     ngOnDestroy(){
      if(this.closeSub) {
        this.closeSub.unsubscribe();
      }
     }



}

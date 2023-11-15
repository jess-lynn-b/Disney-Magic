import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations:[
    //Components
    LoadingSpinnerComponent,
    //Directives

    //Pipes
  ],
  imports: [
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  CommonModule
],
  exports: [
    //Modules
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    //Components
    LoadingSpinnerComponent,
    //Directives

    //Pipes

  ],
})

export class SharedModule {}


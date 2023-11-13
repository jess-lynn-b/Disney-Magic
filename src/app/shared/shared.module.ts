import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations:[
    //Components
    LoadingSpinnerComponent,
    //Directives

    //Pipes
  ],
  imports: [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule
],
  exports: [
    //Modules
    CommonModule,
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


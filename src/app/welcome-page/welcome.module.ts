import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./welcome-page.component";
import { SharedModule } from "../shared/shared.module";
import { WelcomeRoutingModule } from "./welcome-routing.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations:[
  //Components
  WelcomeComponent,

  //Directives

  //Pipes
],
  imports: [
    SharedModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule{}


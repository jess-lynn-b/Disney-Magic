import { NgModule } from "@angular/core";
import { ClubsLoungesComponent } from "./clubs-lounges.component";
import { SharedModule } from "../shared/shared.module";

@NgModule ({
declarations: [
  //Components
  ClubsLoungesComponent
  //Directives

],
imports:[
  SharedModule,
  ClubsLoungesModuel
],

})
export class ClubsLoungesModuel{}

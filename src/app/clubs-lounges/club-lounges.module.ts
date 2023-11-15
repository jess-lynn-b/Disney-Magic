import { NgModule } from "@angular/core";
import { ClubsLoungesComponent } from "./clubs-lounges.component";
import { SharedModule } from "../shared/shared.module";
import { ClubsLoungesRoutingModule } from "./clubs-lounges-routing.module";
import { CommonModule } from "@angular/common";

@NgModule ({
declarations: [
  //Components
  ClubsLoungesComponent
  //Directives

],
imports:[
  SharedModule,
  ClubsLoungesRoutingModule,
  CommonModule
],

})
export class ClubsLoungesModuel{}

import { NgModule } from "@angular/core";
import { CasualRestaurantsComponent } from "./Casual.component";
import { CasualRoutingModule } from "./casual-routing.module";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";

@ NgModule ({
  declarations: [
    //Components
    CasualRestaurantsComponent,
    //Directives

  ],
  imports: [
    SharedModule,
    CasualRoutingModule,
    CommonModule
  ],
})
export class CasualModule {}

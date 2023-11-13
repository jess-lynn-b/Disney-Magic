import { NgModule } from "@angular/core";
import { CasualRestaurantsComponent } from "./Casual.component";
import { CasualRoutingModule } from "./casual-routing.module";
import { SharedModule } from "../shared/shared.module";

@ NgModule ({
  declarations: [
    //Components
    CasualRestaurantsComponent,
    //Directives

  ],
  imports: [
    SharedModule,
    CasualRoutingModule
  ],
})
export class CasualModule {}

import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PaloComponent } from "./palo.component";
import { RouterModule } from "@angular/router";
import { PaloRoutingModuel } from "./palo-routing.module";

@NgModule ({
  declarations: [
// Componenets
    PaloComponent
//Directives
  ],
  imports: [
    SharedModule,
    PaloRoutingModuel
  ]
})
export class PaloModule {}

import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PaloComponent } from "./palo.component";
import { PaloRoutingModuel } from "./palo-routing.module";
import { CommonModule } from "@angular/common";

@NgModule ({
  declarations: [
// Componenets
    PaloComponent
//Directives
  ],
  imports: [
    SharedModule,
    PaloRoutingModuel,
    CommonModule
  ]
})
export class PaloModule {}

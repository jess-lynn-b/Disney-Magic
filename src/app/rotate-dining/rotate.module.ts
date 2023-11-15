import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { RotateRoutingModule } from "./rotate-routing.module";
import { RotateDetailsComponent } from "./rotate-details.component";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    //Components
    RotateDetailsComponent
    //Directives

    //Pipes
  ],
  imports: [
    SharedModule,RotateRoutingModule, CommonModule
  ]
})
export class RotateModule{}

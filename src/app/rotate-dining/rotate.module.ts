import { NgModule } from "@angular/core";
import { RotateDetailsComponent } from "./rotate-details.component";
import { RotateListComponent } from "./rotate-list.component";
import { SharedModule } from "../shared/shared.module";
import { RotateRoutingModule } from "./rotate-routing.module";


@NgModule({
  declarations: [
    //Components
    RotateDetailsComponent,
    RotateListComponent
    //Directives

    //Pipes
  ],
  imports: [
    SharedModule,RotateRoutingModule
  ]
})
export class RotateModule{}

import { NgModule } from "@angular/core";
import { CastawayCayComponent } from "./castaway-cay.component";
import { SharedModule } from "../shared/shared.module";
import { CastawayRoutingModule } from "./castaway-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    CastawayCayComponent
  ],
  imports: [
    SharedModule, CastawayRoutingModule, CommonModule
  ]
})
export class CastawayModule {}


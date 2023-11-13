import { NgModule } from "@angular/core";
import { CastawayCayComponent } from "./castaway-cay.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CastawayCayComponent
  ],
  imports: [
    SharedModule,
    CastawayModule
  ]
})
export class CastawayModule {}


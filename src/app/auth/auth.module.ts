import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";


@NgModule ({
  declarations: [
    AuthComponent,
  ],
  imports: [
    RouterModule.forChild([
      { path: '', component: AuthComponent}
    ]),
    SharedModule,
    CommonModule
  ],
  exports: []

})
export class AuthModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RotateDetailsComponent } from "./rotate-details.component";


const routes: Routes = [
  { path: '', component: RotateDetailsComponent, children: [
    {path: ':id', component: RotateDetailsComponent}
  ] },
]
@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class RotateRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaloComponent } from "./palo.component";

const routes: Routes = [
  { path: '', component: PaloComponent },
]
@NgModule ({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PaloRoutingModuel {}

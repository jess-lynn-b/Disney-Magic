import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CasualRestaurantsComponent } from "./Casual.component";

const routes: Routes = [
  { path: '', component: CasualRestaurantsComponent},
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CasualRoutingModule {}

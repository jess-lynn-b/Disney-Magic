import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClubsLoungesComponent } from "./clubs-lounges.component";

const routes: Routes = [
  { path: '', component: ClubsLoungesComponent},
]
@NgModule ({
  imports :[
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClubsLoungesRoutingModule {}

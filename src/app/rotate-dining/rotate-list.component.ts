import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RotateDetailsComponent } from "./rotate-details.component";
import { FamilyDine } from "../shared/models/family-dine.model";
@Component ({
  selector: 'app-rotate-list',
  templateUrl: './rotate-list.component.html',
  styleUrls: ['./rotate-list.component.css'],
})

export class RotateListComponent {


  constructor (
    private route: ActivatedRoute,
    private router: Router,
    private rotatedetails: RotateDetailsComponent
  ){}


}

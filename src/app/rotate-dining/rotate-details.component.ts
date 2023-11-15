import { Component } from "@angular/core";
import { FamilyDine } from "../shared/models/family-dine.model";
import { RotationalDiningService } from "./rotational.service";

@Component({
  selector: 'app-rotate-details',
  templateUrl: './rotate-details.component.html',
  styleUrls: ['./rotate-details.component.css']
})
export class RotateDetailsComponent {
  public title: string;
  public details: string;
  public imagePath: string;
  public rotateData: FamilyDine[] ;


  constructor(
    private rotateService: RotationalDiningService ) {
      this.title = 'title';
      this.details = 'details';
      this.imagePath = 'imagePath';
      this.rotateData = [];
    }

    ngOnInit (){
      this.rotateData = this.rotateService.getData();
    }
}


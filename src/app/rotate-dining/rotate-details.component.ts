import {
  Component, OnInit,
 } from '@angular/core';
import { FamilyDine } from '../shared/models/family-dine.model';
import { RotationalDiningService } from './rotational.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-rotate-details',
  templateUrl: './rotate-details.component.html',
  styleUrls: ['./rotate-details.component.css'],
})
export class RotateDetailsComponent implements OnInit{
  public title: string;
  public details: string;
  public imagePath: string;
  public rotateData: FamilyDine[];
  public rotateDataDetails: FamilyDine | undefined;



  constructor(
    private rotateService: RotationalDiningService,
    private router: Router,
    private route: ActivatedRoute

  ){
    this.title = 'title',
    this.details = 'details';
    this.imagePath = 'imagePath';
    this.rotateData = [];
       }
  detailsVisable = false;

  ngOnInit() {
    this.rotateData = this.rotateService.getData();
    this.route.params.subscribe((params: Params )=> {
      const detailsIdFromParams = +params['id'];
      this.rotateDataDetails = this.rotateService.getDataById(detailsIdFromParams)
    })
  }
  toggleDetails(){
    this.router.navigate(['../',this.rotateDataDetails?.id,this])
  }

}

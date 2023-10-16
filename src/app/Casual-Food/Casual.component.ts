import { Component, OnInit } from '@angular/core';
import { CasualDine } from '../shared/models/casual-dine.model';
import { CasualDiningService } from './casual.service';
@Component({
  selector: 'app-casual',
  templateUrl: './Casual.component.html',
  styleUrls: ['./Casual.component.css']
})
export class CasualRestaurantsComponent{
  public title: string;
  public details: string;
  public imagePath: string;
  public casualData: CasualDine[] ;

  constructor (
    private casualSerivce: CasualDiningService
  ){
    this.title = 'title',
    this.details = 'details';
    this.imagePath = 'imagePath';
    this.casualData = [];
  }
  ngOnInit() {
    this.casualData = this.casualSerivce.getData();}
}

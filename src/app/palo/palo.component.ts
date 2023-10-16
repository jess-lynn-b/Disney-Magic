import { Component, OnInit } from '@angular/core';
import { PaloDine } from '../shared/models/palo-dine.model';
import { PaloDiningService } from './palo.service';

@Component({
  selector: 'app-palo',
  templateUrl: './palo.component.html',
  styleUrls: ['./palo.component.css']
})
export class PaloComponent{
  public title: string;
  public details: string;
  public imagePath: string;
  public paloData: PaloDine[] ;

  constructor (
    private paloService: PaloDiningService
  ){
    this.title = 'title',
    this.details = 'details';
    this.imagePath = 'imagePath';
    this.paloData = [];
  }
  ngOnInit(){
    this.paloData =
    this.paloService.getData();}
}

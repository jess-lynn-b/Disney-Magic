import { Component } from '@angular/core';
import { CastawayCayService } from './castaway-cay.service';
import { Castaway } from '../shared/models/castaway.model';

@Component({
  selector: 'app-castaway-cay',
  templateUrl: './castaway-cay.component.html',
  styleUrls: ['./castaway-cay.component.css']
})
export class CastawayCayComponent {
  public title: string;
  public details: string;
  public imagePath: string;
  public castawayData: Castaway[];

  constructor (
    private castawayService: CastawayCayService
  ){
    this.title = 'title',
    this.details = 'details',
    this.imagePath = 'imagePath',
    this.castawayData = [];
  }

  ngOnInit() {
    this.castawayData = this.castawayService.getData();
  }
  getData(){
    this.castawayService.getData()
  }
}

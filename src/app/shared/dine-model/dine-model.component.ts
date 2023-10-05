import { Component } from '@angular/core';

@Component({
  selector: 'app-dine-model',
  templateUrl: './dine-model.component.html',
  styleUrls: ['./dine-model.component.css']
})
export class DineModelComponent {
  title: string;
  details: string;
  imagePath: string;
  constructor () {
    this.title = 'title';
    this.details = 'details';
    this.imagePath = 'imagePath';
  }
}

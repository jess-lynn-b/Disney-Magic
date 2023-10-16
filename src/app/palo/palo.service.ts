import
 { Injectable } from '@angular/core';
 import { PaloDine } from '../shared/models/palo-dine.model';

 @Injectable ({
  providedIn: 'root'
 })
export class
PaloDiningService {
  private myPaloDineArray:
  PaloDine[] = [
    new PaloDine
    ('Palo', 'Savor classic Northern Italian cooking with a modern twist at this chic adult-exclusive restaurant—it’s a feast for the senses!', 'http'),
  ]
  getData(){
    return this.myPaloDineArray;
  }
}

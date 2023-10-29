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
    ('Palo', 'Named after the signature long poles used by gondoliers in Venice, Palo serves an adult-exclusive restaurant serving Italian fare in an intimate setting amid stunning seaside views. Fine Italian cookery begins with artfully prepared antipasti, soft potato gnocchi piennolo in tomato sauce with kale, fritto di calamari e gamba marinara or sip on a steaming stew of seafood favorites scented with basil and garlic. For your main course, be transported to the heart of Italy as you pamper your palate with freshly prepared specialties that include butternut agnolotti, seared sea scallops on celery root puree – or entice your taste buds with a house favorite: piquant dover sole (fileted table side), garnished with nut brown butter garnished with chopped capers. For a sweet ending, discover a culinary confection of freshly made desserts including homemade tiramisù, panna cotta or our house favorite: chocolate soufflé with vanilla bean and chocolate sauce. Dress to impress with this elegant dining experience formal or semi-formal attire is recommended.', 'https://www.mickeysdreamvacations.com/uploads/1/2/1/4/12146140/jen6_orig.jpg'),
  ]
  getData(){
    return this.myPaloDineArray;
  }
}

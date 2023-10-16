import {
  Injectable } from '@angular/core';
import { FamilyDine } from '../shared/models/family-dine.model';

@Injectable({
  providedIn: 'root'
})
export class RotationalDiningService {
  private myFamilyDineArray: FamilyDine[] = [
    new FamilyDine ('Rapunzels Royal Table','In the faraway kingdom of Corona we are celebrating Rapunzel’s birthday and the anniversary of her return home. Step inside their royal ballroom, where glowing wish lanterns illuminate your path and the walls are adorned with colorful drawings reflecting Rapunzel’s artistic endeavors.Throughout dinner, be treated to loads of lively entertainment—from singing and dancing with a merry band of musicians to appearances by Flynn Rider, the mischievous Snuggly Duckling Thugs and Princess Rapunzel herself. You can even partake in the festivities, which includes a spirited parade to cap off the night.','https://allears.net/wp-content/uploads/2019/02/rapunzels-royal-table-disney-magic-19-100.jpg'),
    new FamilyDine ('Animator’s Palate','Be drawn into a spacious yet stylized dining room that recalls a real-life, hand-drawn environment in black and white. Animator’s Palate boasts a fantastic architectural design, where proportions bend and slant suddenly and sketches showcasing characters and scenes from Disney and Disney·Pixar films adorn the walls around you.Join Sorcerer Mickey as he leads the fun and transofrms the room with splashes of color!'
    ,'https://www.tripsavvy.com/thmb/6WTAPJaCbmAto6Py9jFJFUEzuCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Disney-Magic-05901-5910c7ea3df78c9283286a21.JPG'),
    new FamilyDine ('Lumieres Beauty and Beast themed','Make your way into a spacious ballroom, where grand glowing roses hang in wondrous glass domes and golden Art Deco columns mingle with a sweeping mural depicting the classic ballroom sequence from the hit Disney film. Inside, you are invited to fall in love with freshly prepared and artfully presented French and American cuisine, as you celebrate one of the greatest romances of all time: the love of Beauty and the Beast. Offering a 4-course affair, Lumiere’s will set your taste buds aflame with an enticing selection of American and French fare with a modern twist for supper.','https://www.disneyfanatic.com/wp-content/uploads/2018/03/lumieres-restaurant-00.png'),
  ]
    getData() {
      return this.myFamilyDineArray;
    }
  }
// Add to favorites

// Delete from favorites






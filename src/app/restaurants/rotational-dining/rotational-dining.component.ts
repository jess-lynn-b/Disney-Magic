import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rotational-dining',
  templateUrl: './rotational-dining.component.html',
  styleUrls: ['./rotational-dining.component.css']
})
export class RotationalDiningComponent {
  ;

  mainDine =[
  {
    title: 'Rapunzels Royal Table',
    details: 'Exclusive to the Disney Magic and an immersable dinning experience.',
    imagePath:'https://allears.net/wp-content/uploads/2019/02/rapunzels-royal-table-disney-magic-19-100.jpg'
  },
  {
    title: 'Animator’s Palate',
    details: 'Take a step into the animation world of Disney as it comes to life.',
    imagePath:'https://www.tripsavvy.com/thmb/6WTAPJaCbmAto6Py9jFJFUEzuCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Disney-Magic-05901-5910c7ea3df78c9283286a21.JPG'
  },
  {
    title: 'Lumieres',
    details: '',
    imagePath:'https://www.disneyfanatic.com/wp-content/uploads/2018/03/lumieres-restaurant-00.png'
  },
  ];


  }

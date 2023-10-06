import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-rotational-dining',
  templateUrl: './rotational-dining.component.html',
  styleUrls: ['./rotational-dining.component.css']
})
export class RotationalDiningComponent {


  familyDine =[
  {
    title: 'Rapunzels Royal Table',
    imagePath:'https://allears.net/wp-content/uploads/2019/02/rapunzels-royal-table-disney-magic-19-100.jpg'
  },
  {
    title: 'Animator’s Palate',
    imagePath:'https://www.tripsavvy.com/thmb/6WTAPJaCbmAto6Py9jFJFUEzuCY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Disney-Magic-05901-5910c7ea3df78c9283286a21.JPG'
  },
  {
    title: 'Lumieres',
    imagePath:'https://www.disneyfanatic.com/wp-content/uploads/2018/03/lumieres-restaurant-00.png'
  },
  ];


  }

import { Component } from '@angular/core';
import { ClubsDine } from '../shared/models/clubs.model';
import { ClubsLoungesService } from './clubs.service';

@Component({
  selector: 'app-clubs-lounges',
  templateUrl: './clubs-lounges.component.html',
  styleUrls: ['./clubs-lounges.component.css']
})
export class ClubsLoungesComponent {
    public title: string;
    public details: string;
    public imagePath: string;
    public clubData: ClubsDine[];

    constructor (
      private clubService: ClubsLoungesService) {
        this.title = 'title',
        this.details = 'details';
        this.imagePath = 'imagePath';
        this.clubData = [];
      }
      ngOnInit(){
       this.clubData =
       this.clubService.getData();
      }
      getData(){
        this.clubService.getData()
      }
}

import { Injectable } from "@angular/core";
import { ClubsDine } from "../shared/models/clubs.model";
@Injectable({
  providedIn: 'root'
})

export class ClubsLoungesService {
  private myClubsDineArray: ClubsDine[] = [
    new ClubsDine
    ('','',''),
]
}

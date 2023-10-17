import { Injectable } from "@angular/core";
import { Welcome } from "../shared/models/welcome.model";

@Injectable ({
  providedIn: 'root'
})
export class welcomeService {
  private myWelcomeArray:
  Welcome[] = [
    new Welcome(
      'Lumieres','Rotational dining','Deck 3 - midship'),
    new Welcome(
      'Rapunzels Royal Table', 'Rotational dining', 'Deck 3 - aft'),
    new Welcome (
      'Soul Cat Lounge', 'AClubs and Lounges', 'Deck 3 - aft'),
    new Welcome(
      'Fathoms', 'Clubs and Lounges', 'Deck 3 - midship'),
    new Welcome(
      'O Gills Pub', 'Clubs and Lounges', 'Deck 3 - forward'),
    new Welcome(
      'Keys', ' Clubs and Lounges', ' Deck 3 - forward'),
    new Welcome (
      'Animaters Palate', 'Rotational dine', 'Deck 4 - aft' ),
    new Welcome(
      'D Lounge', 'Clubs and Lounges', 'Deck 4 - midship'),
    new Welcome (
      'Preludes Bar', 'Clubs and Lounges', 'Deck 4 - forward'),


  ]
  getData() {
    return this.myWelcomeArray;
  }
}

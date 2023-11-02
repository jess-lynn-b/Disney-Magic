import { Injectable } from "@angular/core";
import { ClubsDine } from "../shared/models/clubs.model";
@Injectable({
  providedIn: 'root'
})

export class ClubsLoungesService {
  private myClubsDineArray: ClubsDine[] = [
    new ClubsDine
    ('Cove Café','Escape to a getaway for coffee or drinks amidst laid-back sophistication and a touch of tropical bliss. Sit back and relax at the Cove Café, an adults-only lounge that’s the perfect place to take time out for specialty drinks, coffee beverage offerings or tea throughout the day. During the evening, Guests can unwind while socializing and enjoying cocktails, wine or a light bite. Adult beverage tastings are also available at select times for an additional fee. Located on Deck 9, midship.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/cove-cafe/cove-cafe-00.jpg?1655146809730'),
    new ClubsDine
    ('Soul Cat Lounge','This lounge celebrates the soul of jazz with live music jives with artisanal drinks and subtle nods to Soul the Pixar movie. A full bar serves up Manhattans, martinis and other Empire City-inspired craft cocktails. Plus, enjoy a medley of innovative mocktails, specialty coffees and sodas, for the perfect pick-me-up. You can even treat yourself to a bite of Little Italy with an order of zeppoles, a classic deep-fried pastry decadently dusted in powdered sugar. Located on Deck 3, aft.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1400/720/75/vision-dam/digital/parks-platform/parks-global-assets/disney-cruise-line/nightclub-lounges/soul-cat-lounge/0505ZN_0217KP-16x9.jpg?2023-06-14T16:56:47+00:00'),
    new ClubsDine
    ('Fathoms','Located in After Hours, a special section of the ship that caters exclusively to adults after nightfall. Immerse yourself here after dark, where adult Guests come to mingle, sing, drink cocktails and dance. Grab a microphone for karaoke, enter a game show, catch a comedy show, or watch a live musical group perform on stage. You’re sure to make waves at Fathoms—where fun reigns and entertainment swells! Located on Deck 3, forward.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/fathoms-entertainment-club/fathoms-entertaiment-club-00.jpg?1595989245792'),
    new ClubsDine
    ('Keys','The chic 1950s theme comes alive at Keys, thanks to a piano man and guest vocalists. Keys is sure to be music to your ears thanks to a large selection of beer and cocktails—in addition to champagne and wine—for an additional fee. Martinis, scotch, single malt tequila, cognac, port, Madeira and specialty coffees like espresso, cappuccino and café mocha are also available. Located on Deck 3, forward.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/keys-piano-bar/keys-piano-bar-00.jpg?1595989480409'),
    new ClubsDine
    ('O`Gills Pub','Share a pint and watch all your sports teams on TV at this rollicking, shamrock-sprinkled Irish pub and sports bar. The charming O’Gills Pub will have you feeling right at home—that is, if you live in Dublin. This handsome pub, with dark woods, brass accents and 4-leaf clovers, is saturated in shades of green and flocked with shamrocks. It’s a boisterous, joyful tribute to traditional Irish street-corner pubs. With plenty of room to spread out, converse and cheer your team on, O’Gills Pub is a place to grab a favorite refreshment, hang out, play board games or backgammon and catch live sporting events via satellite on high-definition televisions. Relax a spell with a pint, a mug, a mixed or specialty drink—including O’Gills Pub’s private label Irish Cream—or, order the Blarney Stone Tasting Flight that includes Kilbeggan Irish Whisky and a steaming, rich cup of Irish coffee. Located on Deck 3, forward.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1400/720/75/dam/wdpro-assets/dcl/finder/activites/o-gills-pub/o-gills-pub-01.jpg?1595989307856'),
    new ClubsDine
    ('D Lounge','Sing, dance, play games and enjoy live entertainment as a family at this high-energy entertainment venue. At D Lounge, you’re the star, with family-friendly entertainment like karaoke, trivia game shows and dance parties. A colorful yet casual atmosphere and spacious, comfortable seating make this lounge the perfect gathering place for the whole clan. At D Lounge, you’re the star, with family-friendly entertainment like karaoke, trivia game shows and dance parties. A colorful yet casual atmosphere and spacious, comfortable seating make this lounge the perfect gathering place for the whole clan. D Lounge also features a full bar serving a selection of wines and cocktails. Nonalcoholic beverages, including sparkling sodas and fruit smoothies, are also available for purchase.Located Deck 4, midship.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/d-lounge-family-club/d-lounge-family-club-00.jpg?1595989515666'),
    new ClubsDine
    ('Signals','Answer the call for rest and refreshment at this breezy bar next to the Quiet Cove Pool. Offering views of the sea, shore and sunset. Signals is a superb spot for breathing easy and savoring a mixed drink. Located on Deck 9, midship.','https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/signals-bar/signals-bar-00.jpg?1595989488197'),

]
getData(){
  return this.myClubsDineArray;
}
}

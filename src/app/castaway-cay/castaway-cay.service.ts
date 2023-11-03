import { Injectable } from '@angular/core';
import { Castaway } from '../shared/models/castaway.model';
@Injectable({
  providedIn: 'root'
})
export class CastawayCayService {

  private myCastawayArray:  Castaway[] = [
    new Castaway
    ('Cookie`s','Located near the family beach and lunch is served from 11:30a to 2pm. This is all included in the cost of the cruise and food is what you would typically find at a backyard BBQ. Freash tropical fruit salad, banannas, red grapes, green apples and red apples are also offered and perfect on a hot day. Main entrees available are: hamburgers, hot dogs, grilled chicken sandwiches and they also have plant-based options as well. The amount of sides offered won`t disappoint either: corn on the cob, couscous, red skinned potato salad, tomato salad, coleslaw, lays chips either regular or barbecue flavors. Desserts offered here are what the vacation is all about... cookies the chocolate chip cookies. Okay maybe not the entire vacation but the lunch spot is named Cookie`s... they also have soft serve ice cream here that is the same as the ship. ','https://blog.cruisingjournal.com/wp-content/uploads/2020/03/Castaway_Cay_Cookies_Too_BBQ-3-.jpg'),
    new Castaway
    ('Cookie`s Too','Located near the adult only beach down from the family beach and is available from 11:30a to 2p as well. It has a lot of the same offereing as the orginial Cookie`s with a few upgrades. The main difference is that for the entree`s these are offered in addition to the basics: ribeye steaks, roasted chicken, cajun Mahi Mahi and bbq pork ribs. Fresh cut fruit is available: pineapple, honeydew, watermelon, strawberries and the whole pieces of fruit as well. The sides offered are the same with one addition of the Greek Salad that features fresh feta. When it comes to dessert don`t worry the chocolate chip cookies are offered here as well as the soft serve ice cream machine. ','https://mamacitaonthemove.com/wp-content/uploads/2017/02/DisneyCruiserestaurant-scaled.jpg'),
    new Castaway
    ('Serenity Bay BBQ','Located at the adult only beach and is available from 11:30a to 2p as well. The food offered here is the same as it is at Cookie`s Too with the only difference is the seating is limited. Be mindful and if its too crowded its a short walk to Cookie`s Too. ','https://i.pinimg.com/736x/b6/62/37/b66237bfd509a2d4813d1c29009edba2.jpg'),
    new Castaway
    ('Olaf’s Summertime Freeze','This is the ultimate stop for a perfect frozen drink on the beach. This is located near the family beach. They are available in non-alcoholic and alcoholic as well for additional charge. Drinks are available in both regular cup or the Olaf souvenir sipper cup as well depending on the price you want to pay. There are so many cute photo opps around Olaf`s place as well.','https://pic.pimg.tw/victor781007/1545645261-263395479_l.jpg'),
    new Castaway
    ('Heads Up Bar','This is located past the family beach out on the small boardwalk that overlooks the ocean and Pelican Plunge. This bar serves up wine (red, white or blush) and beer (domestic and imported). Speciality drinks are also available: Nutty Buddy, Bahama Breezer and Islander. Minimum drinking age is 21 but the drinks are available without alcohol as well.','https://live.staticflickr.com/7778/17418429038_541a795b10_b.jpg'),
    new Castaway
    ('Conched Out Bar', 'This is located the closest to the family beach and Cookie`s BBQ. It`s most popular drink would be the Konk Kooler that is refreshing and fruity blended rum drink. Speciality coconut cups and bamboo sippers are popular here as well.', 'https://s.abcnews.com/images/GMA/tallcaup_hpMain.jpg'),
    new Castaway
    ('Sand Bar', 'Located further down the Family Beach and closer to Cookie`s Too BBQ. This is a perfect spot for photos and a great drink on the beach.', 'https://eatsleepcruise.com/wp-content/uploads/2022/10/8BF73825-1277-464F-8354-6E41E6ABB9BA-scaled.jpeg.webp'),
    new Castaway
    ('Castaway Air Bar', 'Located on Serenity Bay Beach of the adult only section. This looks like it has been perfectly placed off of the Castaway Cay`s airstrip. This bar offers snacks, libations, drinks and serene views of the ocean.', 'https://www.thesun.co.uk/wp-content/uploads/2022/07/2d248da1-1f20-4d1a-9033-3698e65f9ccd.jpg?strip=all&w=960'),

    new Castaway
    ('Recreational Activities Also Available...', 'Bike rentals are available and located throught the island. Cabana rentals are hard to get and must be booked in advance as there is only 20 available on the Family Beach. Castaway cay fishing adventure in pristine water with all of the equipment and bait included. Snorkeling lagoon offers crystal-clear water with speciality sunken treasures to look for. Pelican plunge is a two-story waterlside that is available on both family beach and serenity bay as well. Boat rentals offers kayak and canoes to rent and explore the island waterways. Stingray experience allows you to have a closer look at the marine life and how to properly handle and feed these amazing creatures. Flippers & Floats rents out tubs and floats to enjoy the ocean and relax in the sun. ', 'https://cache.undercovertourist.com/blog/2023/05/1121-disney-castaway-cay-ship-docked.jpg'),
  ]
  getData(){
    return this.myCastawayArray;
  }

}

import
{ Injectable } from '@angular/core';
import { CasualDine } from '../shared/models/casual-dine.model';


@Injectable({
  providedIn: 'root'
})
export class CasualDiningService {
  private myCasualDineArray: CasualDine[] = [
    new CasualDine
    ('Duck-In Diner','Donalds Favorite quick-bite spots known for its fresh, Middle Eastern inspired shawarma and classic American fare like hamburgers and hotdogs. The famous chicken tenders are available here as well. This is located on Deck 9 near all of the outdoor pool areas. Available for lunch and early diner from 11am to 6pm this is included in your cruise. ', 'https://www.dqtravel.net/ezoimgfmt/i0.wp.com/www.dqtravel.net/wp-content/uploads/2020/05/Duck-in-diner.jpg?resize=1024%2C683&ssl=1&ezimgfmt=ng:webp/ngcb2'),
    new CasualDine
    ('Pinocchios Pizzeria', 'Savor a slice of sizzling pizza throughout the day at this outdoor eatery located next to Goofys Pool on deck 9. Let your heart come alive with pepperoni or let your conscience be your guide as you choose between vegetarian, Hawaiian or plan cheese. Pizza is usually available between 11am and 6pm, this is included in your cruise.','https://www.disneyfoodblog.com/wp-content/uploads/2022/01/disney-cruise-line-restaurants-magic-pinocchios-pizzeria.png'),
    new CasualDine
    ('Eye Scream Treats','Mike Wazowski from the Disney Pixar animated feature Monsters, Inc. This is the breezy eatery offers such a scary selection of soft-serve ice cream, you wont believe your eye! This is located on Deck 9 and unlimited soft serve ice cream from 11am until 12:30am. The flavors are changed out daily so new options eveyday to enjoy included in your cruise.','https://www.cruisedeckplans.com/DP/deckpictures/11/web/10532.webp'),
    new CasualDine
    ('FroZone Treats','Chill out with a super-cool refreshments! Inspired by the ice-creating hero from the Disney Pixar movie, The Incredibles. This is located on Deck 9 close to all the pools. These are an additional charge but it offers frozen-fruit smoothies of all flavors as well as bottled beer.','https://loveofthemagic.com/wp-content/uploads/2019/09/img_1579.jpg'),
    new CasualDine
    ('Cabanas', 'Cabanas is a unique, free-flowing restaurant serving up mouthwatering specialties made to order. Wander the "boardwalk"—home to over 10 diverse food stations—and partake in a beach-themed breakfast and lunch experience featuring freshly prepared culinary classics. Breakfast includes ade-to-order omelets, scrambled eggs, sausages, hash browns, Mickey-shaped waffles, muffins, fruit, cereal and more. Hot beverages like cappuccino, espresso and café latte make your morning that much brighter. Lunch includes salads, soups, burgers, sandwiches, steak, chicken, seafood and pizza. For a sweet ending, treat your taste buds to a selection of delectable desserts like sundaes, cookies, cakes and fruit.', 'https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1260/708/75/dam/wdpro-assets/dcl/finder/activites/cabanas-restaurant/cabanas-restaurant-00.jpg?1665766145464'),
    new CasualDine
    ('Room Service', 'Feast on fresh, made-to-order dishes in the comfort of your stateroom 24 hours a day—with most meal items included in the price of your cruise. Typical items that are available include: custom-made sandwiches, fresh salads and appetizers,hearty burgers, pizza, hot dogs, chef specialites, scrumptious desserts and cookies. Also available 24 hours a day... Mickey Ice Cream Bars!', 'https://cruisefever.net/wp-content/uploads/2023/02/escapencl-261.jpg')
  ]
  getData() {
    return this.myCasualDineArray;
  }
}


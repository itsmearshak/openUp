import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }
  getCatchPhrase(index:number):String {
    const catchPhrases: String[]= ["Unlock Your Mind with OpenUp: Your Source for Insightful Blogging",
    "OpenUp Your World: Where Blogging Meets Inspiration",
    "OpenUp Your Heart, OpenUp Your Mind: Join Our Blogging Community Today",
    "Dare to OpenUp: Discover Our Range of Engaging Blog Posts",
    "OpenUp to New Perspectives: Explore Our Blogging Universe",
    "Experience the Power of OpenUp: Follow Our Blog for Fresh Insights",
    "Embrace the Journey: Let OpenUp Guide Your Blogging Adventure",
    "The Path to Enlightenment Starts Here: Follow OpenUp's Blog Today"];
    return catchPhrases[index];
  }
}

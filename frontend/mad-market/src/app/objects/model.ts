import { Category } from './category';
import { Subcategory } from './subcategory';
import { Listing } from './listing';
import {User} from "./user";
export class Model {
  constructor() {
    this.categories = [];
    this.subcategories = [];
    this.listings = [];
  }

  public categories: Category[];
  public subcategories: Subcategory[];
  public listings: Listing[];
  public user?: User;

  public getCategories(obj : any) {
    for (let item of obj) {
      this.categories.push(new Category(item));
    }
  }

  public getListings(obj : any) {
    this.listings.length = 0;
    for (let item of obj) {
      this.listings.push(new Listing(item));
    }
  }

  public getUser(obj : any) {
    this.user = new User(obj);
  }
}

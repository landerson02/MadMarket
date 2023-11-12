import { Category } from './category';
import { Subcategory } from './subcategory';
import { Listing } from './listing';
export class Model {
  constructor() {
    this.categories = [];
    this.subcategories = [];
    this.listings = [];
  }

  public categories: Category[];
  public subcategories: Subcategory[];
  public listings: Listing[];

  public getCategories(obj : any) {
    for (let item of obj) {
      this.categories.push(new Category(item));
    }
  }

  public getListings(obj : any) {
    for (let item of obj) {
      this.listings.push(new Listing(item));
    }
  }
}

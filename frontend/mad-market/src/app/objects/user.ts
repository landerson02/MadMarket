import {Listing} from "./listing";

export class User {
  constructor(obj : any) {
    this.userId = obj.id;
    this.userName = obj.name;
    this.email = obj.email;
    this.phoneNumber = obj.phone;
    this.listings = [];
  }

  getListing(listing : any) {
    this.listings.length = 0;
    for (let item of listing) {
      this.listings.push(new Listing(item));
    }
  }

  public userId: number;
  public userName: string;
  public email: string;
  public phoneNumber: string;
  public listings: Listing[];
}

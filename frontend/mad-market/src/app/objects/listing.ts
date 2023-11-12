export class Listing {
  constructor(obj : any) {
    this.listingId = obj.listingId;
    this.buyerId = obj.buyerId;
    this.userId = obj.userId;
    this.categoryId = obj.categoryId;
    this.name = obj.name;
    this.price = Number(Number(obj.price).toFixed(2));
    this.keywords = obj.keywords;
    this.timestamp = obj.timestamp;
  }

  public listingId: number;
  public buyerId: number;
  public userId: number;
  public categoryId: number;
  public name: string;
  public price: number;
  public keywords: string;
  public timestamp: string;
}

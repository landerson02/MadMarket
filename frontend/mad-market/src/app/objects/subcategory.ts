export class Subcategory {
  constructor(obj : any) {
    this.id = obj.id;
    this.name = obj.name;
    this.categoryId = obj.categoryId;
  }

  public id: number;
  public name: string;
  public categoryId: number;
}

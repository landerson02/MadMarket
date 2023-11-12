export class Category {
  constructor(obj : any) {
    this.id = obj.categoryId;
    this.name = obj.categoryName;
    this.subCategoryId = obj.subCategoryId;
  }

  public id: number;
  public name: string;
  public subCategoryId: number;
}

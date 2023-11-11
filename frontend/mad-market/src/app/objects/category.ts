class Category {
  constructor(obj : any) {
    this.id = obj.id;
    this.name = obj.name;
    this.subCategoryId = obj.subCategoryId;
  }

  public id: number;
  public name: string;
  public subCategoryId: number;
}

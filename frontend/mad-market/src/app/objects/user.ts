export class User {
  constructor(obj : any) {
    this.userId = obj.id;
    this.userName = obj.name;
    this.email = obj.email;
    this.phoneNumber = obj.phone;
  }

  public userId: number;
  public userName: string;
  public email: string;
  public phoneNumber: string;
}

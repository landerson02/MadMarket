class User {
  constructor(obj : any) {
    this.userId = obj.userId;
    this.userName = obj.userName;
    this.email = obj.email;
    this.phoneNumber = obj.phoneNumber;
  }

  public userId: number;
  public userName: string;
  public email: string;
  public phoneNumber: string;
}

export class User {
  constructor(
    public id: number,
    public fullname: string,
    public password: string,
    public address: string,
    public dob: string,
    public email: string,
    public phone: string,
    public status: string
  ) {}
}

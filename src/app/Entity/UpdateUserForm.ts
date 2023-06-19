export class UpdateUserForm {
  constructor(
    public fullname: string,
    public address: string,
    public dob: string,
    public email: string,
    public phone: string
  ) {}
}

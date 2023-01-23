import { Product } from "./Product";

export class Cartitem {
  constructor(
    public id: number,
    public product: Product,
    public quantity: number
  ) {}
}

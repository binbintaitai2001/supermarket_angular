import { Category } from "./Category";

export class Product {
  constructor(
    public id: number,
    public name: string,
    public img: string,
    public price: number,
    public quantity: number,
    public category: Category
  ) {}
}

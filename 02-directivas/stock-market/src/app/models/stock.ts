export class Stock {
  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public favorite: boolean;

  constructor(
    name: string,
    code: string,
    price: number,
    previousPrice: number
  ) {
    this.name = name;
    this.code = code;
    this.price = price;
    this.previousPrice = previousPrice;
    this.favorite = false;
  }

  isSubiendo(): boolean {
    return this.price > this.previousPrice;
  }

  // isSubiendoClass(): 'subiendo' | 'bajando' {
  //   if (this.isSubiendo()) return 'subiendo';
  //   return 'bajando';
  // }
}

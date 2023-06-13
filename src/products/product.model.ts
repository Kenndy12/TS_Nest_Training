export class Product {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
  ) {}

  toJson(): object {
    const productJson: object = {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
    };
    return productJson;
  }
}

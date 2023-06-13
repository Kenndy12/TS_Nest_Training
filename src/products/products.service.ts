import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
@Injectable()
export class ProductService {
  product: Product[] = [];

  insertProduct(name: string, description: string, price: number): object {
    const newProduct = new Product(
      (this.product.length + 1).toString(),
      name,
      description,
      price,
    );

    this.product.push(newProduct);
    return newProduct.toJson();
  }

  getAllProducts() {
    //Covering the this.product array in array and spread syntax
    //to copy the array into a new array and returning the new array
    //thus returning the new array instead of a reference to the array
    return [...this.product];
  }

  getProduct(id: string): Product {
    const product = this.product[parseInt(id) - 1];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return product;
  }

  updateProduct(id: string, name: string, description: string, price: number) {}
}

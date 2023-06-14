import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { Product } from './product.model';
@Injectable()
export class ProductService {
  product: Product[] = [];

  insertProduct(payload: CreateProductDto) {
    const newProduct = new Product(
      (this.product.length + 1).toString(),
      payload.name,
      payload.description,
      payload.price,
    );
    this.product.push(newProduct);
    return newProduct;
  }

  getAllProducts() {
    //Covering the this.product array in array and spread syntax
    //to copy the array into a new array and returning the new array
    //thus returning the new array instead of a reference to the array
    return [...this.product];
  }

  getProduct(id: string): Product {
    const product = this.findProduct(id);
    return product;
  }

  updateProduct(
    id: string,
    name: string,
    description: string,
    price: number,
  ): Object {
    const product = this.findProduct(id);
    const updatedProduct = { ...product };
    if (name) {
      updatedProduct.name = name;
    }
    if (description) {
      updatedProduct.description = description;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.product[parseInt(id) - 1] = updatedProduct;
    return { message: 'Successfully updated product' };
  }

  deleteProduct(id: string) {
    this.product.splice(parseInt(id) - 1, 1);
  }

  private findProduct(id: string) {
    const product = this.product[parseInt(id) - 1];
    if (!product) {
      throw new NotFoundException('Could not find product');
    }
    return product;
  }
}

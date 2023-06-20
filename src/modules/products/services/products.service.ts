import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/CreateProduct.dto';
import { UpdateProductDto } from '../dto/UpdateProduct.tdo';
import { ProductRepository } from '../repositories/product.repository';
@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async insertProduct(productPayload: CreateProductDto) {
    return await this.productRepository.save(productPayload);
  }

  async getAllProducts() {
    //Covering the this.product array in array and spread syntax
    //to copy the array into a new array and returning the new array
    //thus returning the new array instead of a reference to the array
    return await this.productRepository.find();
  }

  async getProduct(id: number) {
    return await this.productRepository.find({
      where: { id: id },
    });
  }

  async updateProduct(id: number, product: UpdateProductDto) {
    return await this.productRepository.updateProduct(id, product);
  }

  async deleteProduct(id: number) {
    return await this.productRepository.delete({ id: id });
  }
}

import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UpdateProductDto } from '../dto/UpdateProduct.tdo';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductRepository extends Repository<Product> {
  constructor(private dataSource: DataSource) {
    super(Product, dataSource.createEntityManager());
  }

  updateProduct = async (
    id: number,
    payload: UpdateProductDto,
  ): Promise<Product> => {
    const updatedData = await this.createQueryBuilder('product')
      .update<Product>(Product, { ...payload })
      .where('id=:id', { id: id })
      .returning('*')
      .updateEntity(true)
      .execute();

    return updatedData.raw[0];
  };
}

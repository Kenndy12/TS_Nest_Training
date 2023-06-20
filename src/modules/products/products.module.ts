import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductRepository } from './repositories/product.repository';
import { ProductService } from './services/products.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductService, ProductRepository],
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { ProductService } from './services/products.service';

@Module({
  controllers: [ProductsController],
  providers: [ProductService],
})
export class ProductsModule {}

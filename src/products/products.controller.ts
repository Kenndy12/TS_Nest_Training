import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ): { profile: object; response: string } {
    const data = this.productService.insertProduct(name, description, price);
    return { profile: data, response: 'Successfully added user' };
  }

  @Get()
  getAllProducts() {
    const data = this.productService.getAllProducts();
    return data;
  }

  @Get('/:id')
  getProduct(@Param('id') id: string): Object {
    return this.productService.getProduct(id);
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('price') price: number,
  ) {}
}

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/CreateProduct.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  addProduct(@Body() payload: CreateProductDto): {
    profile: object;
    response: string;
  } {
    const data = this.productService.insertProduct(payload);
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
  ) {
    return this.productService.updateProduct(id, name, description, price);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string) {
    this.productService.deleteProduct(id);
    return null;
  }
}

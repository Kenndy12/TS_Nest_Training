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
import { CreateProductDto } from '../dto/CreateProduct.dto';
import { UpdateProductDto } from '../dto/UpdateProduct.tdo';
import { ProductService } from '../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async addProduct(@Body() payload: CreateProductDto) {
    return {
      data: await this.productService.insertProduct(payload),
      response: 'Successfully added the product',
    };
  }

  @Get()
  async getAllProducts() {
    return {
      data: await this.productService.getAllProducts(),
      response: `Successfully retrieved the list of products`,
    };
  }

  @Get('/:id')
  async getProduct(@Param('id') id: number) {
    return {
      data: await this.productService.getProduct(id),
      response: `Successfully retrived the product`,
    };
  }

  @Patch('/:id')
  @UsePipes(ValidationPipe)
  async updateProduct(
    @Param('id') id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return {
      data: await this.productService.updateProduct(id, payload),
      response: 'Successfully updated the product',
    };
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: number) {
    return {
      data: await this.productService.deleteProduct(id),
      response: `Successfully deleted the product`,
    };
  }
}

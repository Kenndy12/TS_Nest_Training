import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString({ message: 'Name must be a string' })
  @IsOptional()
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  description: string;

  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Price must be a number' },
  )
  @IsOptional()
  price: number;
}

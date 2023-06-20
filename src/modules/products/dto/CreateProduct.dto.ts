import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'Name should not be empty' })
  name: string;

  @IsNotEmpty({ message: 'Description should not be empty' })
  description: string;

  @IsNotEmpty({ message: 'Price should not be empty' })
  @IsNumber(
    { allowInfinity: false, allowNaN: false },
    { message: 'Price should be a valid number' },
  )
  price: number;
}

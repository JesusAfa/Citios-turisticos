import { IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';
export class CreateCitioDto {
  @IsString()
  readonly nombre: string;

  @IsString()
  readonly dirreccion: string;

  @IsString()
  readonly barrio: string;
}

export class UpdateCitioDto extends PartialType(CreateCitioDto) {}

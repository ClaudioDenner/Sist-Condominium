import { IsString, IsNumber } from 'class-validator';

export class CreateInformationDto {
  @IsString()
  title: string;

  @IsString()
  body: string;

  @IsString()
  date: string;

  @IsNumber()
  user: number;
}

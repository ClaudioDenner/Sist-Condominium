import { IsEmail, IsString, IsStrongPassword } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minUppercase: 1,
    minSymbols: 1,
  })
  pass: string;

  @IsString()
  level: string;
}

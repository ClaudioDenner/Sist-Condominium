import { IsEmail, IsStrongPassword } from 'class-validator';
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
}

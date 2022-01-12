import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'email' })
  @IsString({ message: 'Email should be a string' })
  @IsEmail({}, { message: 'Invalid email' })
  readonly email: string;

  @ApiProperty({ example: 'P@$$w0Rd', description: 'password' })
  @IsString({ message: 'Password should be a string' })
  @Length(8, 32, { message: 'Password length 8 - 32 characters' })
  readonly password: string;
}

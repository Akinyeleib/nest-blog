/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDTO {

  @IsString({message: "Please enter a valid string"})
  @IsNotEmpty({message: "first_name cannot be blank"})
  first_name: string;

  @IsString()
  @IsNotEmpty({message: "last_name cannot be blank"})
  last_name: string;

  @IsString()
  @IsNotEmpty({message: "username cannot be blank"})
  username: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password1: string;

  @IsString()
  @IsNotEmpty()
  password2: string;

  @IsString()
  @IsNotEmpty()
  security_question: string;

  @IsString()
  @IsNotEmpty()
  security_answer: string;

}

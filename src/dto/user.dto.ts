/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsStringNotEmpty } from "src/utils/helper";

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
  @IsStringNotEmpty()
  email: string;

  @IsStringNotEmpty()
  password1: string;

  @IsStringNotEmpty()
  password2: string;

  @IsStringNotEmpty()
  security_question: string;

  @IsStringNotEmpty()
  security_answer: string;

}

/* eslint-disable prettier/prettier */

import { IsEmail } from "class-validator";
import { IsStringNotEmpty } from "src/utils/helper";

export class CreateUserDTO {

  @IsStringNotEmpty()
  first_name: string;

  @IsStringNotEmpty()
  last_name: string;

  @IsStringNotEmpty()
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

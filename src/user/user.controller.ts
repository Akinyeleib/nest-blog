/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcryptjs';

@Controller('user')
export class UserController {

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {

    if (createUserDTO.password1 !== createUserDTO.password2) {
      throw new BadRequestException("Password mismatch");
    }
    const password = await bcrypt.hash(createUserDTO.password1, 10)

    const {first_name, last_name, email, username, security_question, security_answer} = createUserDTO;
    
    return {
      first_name,
      last_name,
      email,
      username,
      password,
      security_question,
      security_answer
    };
  
  }

}

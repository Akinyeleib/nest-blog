/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {
    return createUserDTO;
  }
}

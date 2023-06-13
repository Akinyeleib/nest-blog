/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  createUser(@Body() createUserDTO: CreateUserDTO) {

    if (createUserDTO.password1 !== createUserDTO.password2) {
      throw new BadRequestException("Password mismatch");
    }
    
    return this.userService.createUser(createUserDTO);
  
  }

}

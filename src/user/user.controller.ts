/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

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

  @Get('/:id')
  getUser(@Param('id') id: number): Promise<User> {
    const user = this.userService.getUser(id);
    if (user) return user;
    throw new NotFoundException(`User with ${id} not found!`);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

}

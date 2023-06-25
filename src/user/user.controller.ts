import { BadRequestException, Body, Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateUserDTO } from 'src/dto/user.dto';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

@Controller('user')
export class UserController {

  constructor(private userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO) {

    // passsword confirmation
    if (createUserDTO.password1 !== createUserDTO.password2) {
      throw new BadRequestException('Password mismatch');
    }

    // unique email check
    const user = await this.userService.getUserByEmail(createUserDTO.email);
    if (user) throw new BadRequestException(`Email not available`);
    
    return this.userService.createUser(createUserDTO);
  
  }

  @Get('/:id')
  async getUser(@Param('id') id: number): Promise<User> {
    const user = await this.userService.getUserByID(id);
    console.log(user)
    if (user) return user;
    throw new NotFoundException(`User with ${id} not found!`);
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }

}

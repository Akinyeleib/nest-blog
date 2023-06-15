import { Body, Controller, Get } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Get('login')
  async login(@Body() loginDTO: LoginDTO): Promise<User> {
    const user = await this.userService.getUserByUsername(loginDTO.loginID);
    console.log(user);
    return user;
  }
}

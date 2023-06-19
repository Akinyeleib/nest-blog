import { Body, Controller, ForbiddenException, Get } from '@nestjs/common';
import { LoginDTO } from 'src/dto/login.dto';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { generateToken } from 'src/utils/helper';

@Controller('auth')
export class AuthController {
  constructor(private userService: UserService) {}
  @Get('login')
  async login(@Body() loginDTO: LoginDTO): Promise<string> {
    // check if user exists
    const user = await this.userService.getUserByUsername(loginDTO.loginID);
    // throw error if user does not exist
    if (!user) throw new ForbiddenException('Invalid Credentials');
    // validate password
    const isValid = await bcrypt.compare(loginDTO.password, user.password);
    // throw error for wrong password
    if (!isValid) throw new ForbiddenException('Invalid Credentials');

    return generateToken(user);
  }
}

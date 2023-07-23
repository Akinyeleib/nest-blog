import { BadRequestException, Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../user/user.service';

@Injectable()
export class UserCheckMiddleware implements NestMiddleware {

  constructor(@Inject(UserService) private userService: UserService) {}
    
78
    async use(req: Request, res: Response, next: NextFunction) {
        const userID = parseInt(req.params.id)
        console.log(`User is: ${userID}, type is... ${typeof userID}`)
        const user = await this.userService.getUserByID(userID)
        if (user) {
            next();
        }
        else throw new BadRequestException("Invalid user specified")
    }

}

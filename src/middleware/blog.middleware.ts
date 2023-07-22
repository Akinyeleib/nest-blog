import { BadRequestException, Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { BlogService } from '../blog/blog.service';

@Injectable()
export class BlogCheckMiddleware implements NestMiddleware {

  constructor(@Inject(BlogService) private blogService: BlogService) {}
    
78
    async use(req: Request, res: Response, next: NextFunction) {
        const blogID = parseInt(req.params.id)
        console.log(`Blog is: ${blogID}, type is... ${typeof blogID}`)
        const blog = await this.blogService.getBlog(blogID)
        if (blog) {
            next();
        }
        else throw new BadRequestException("Invalid blog specified")
    }

}

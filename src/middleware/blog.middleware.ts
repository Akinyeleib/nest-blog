import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import {BlogService}from '../blog/blog.service'

export class BlogCheckMiddleware implements NestMiddleware {
    
    constructor(private blogService: BlogService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        const blogID = req.baseUrl.split('/')[2]
        
        console.log(blogID);
        // const blog = await this.blogService.getBlog(Number(blogID))
        // if (blog) next();

        next();
        // else throw new 
    }

}

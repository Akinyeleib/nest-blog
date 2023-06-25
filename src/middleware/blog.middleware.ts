import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class BlogCheckMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
        const blogID = req.baseUrl.split('/')[2]
        
        console.log(blogID);
 
        next();
    }

}

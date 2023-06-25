import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class BlogCheckMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
        const id = req.params['id']
        // console.log("ID is: " + id);
        console.log(req.body);
 
        next();
    }


}

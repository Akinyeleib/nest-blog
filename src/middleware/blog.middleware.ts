import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

export class BlogCheckMiddleware implements NestMiddleware {
    
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Hello from middleware...")
    }

}

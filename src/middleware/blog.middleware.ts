import { NestMiddleware } from "@nestjs/common";

export class BlogCheckMiddleware implements NestMiddleware {
    
    use(req: any, res: any, next: (error?: any) => void) {
        throw new Error("Method not implemented.");
    }

}

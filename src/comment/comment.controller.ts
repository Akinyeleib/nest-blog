import { Body, Controller, ForbiddenException, Get, Headers, Param, ParseIntPipe, Post, Req, UnauthorizedException } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from 'src/dto/comments.dto';
import { UserService } from 'src/user/user.service';
import { BlogService } from 'src/blog/blog.service';
import * as jwt from "jsonwebtoken";
import { configDotenv } from 'dotenv';
import { retrieveTokenFromHeader } from 'src/utils/helper';
configDotenv()

@Controller('blogs/:id/comments')
export class CommentController {

  constructor(
    private commentService: CommentService, 
    private userService: UserService, 
    private blogService:BlogService) {}
  
    @Get('/:id')

  getComment(@Param('id', ParseIntPipe) id: number): Promise<Comments> {
    return this.commentService.getComment(id);
  }

  @Get()
  getComments(): Promise<Comments[]> {
    return this.commentService.getComments();
  }

  @Post()
  async createComment(@Req() req: any, @Headers() headers: any, @Body() createCommentDTO: CreateCommentDTO, @Param('id', ParseIntPipe) blogID: number) {
    // const token = headers.authorization
    // if (!token) {
    //   throw new ForbiddenException("Invalid token");
    // } else {
    //   const validToken: any = jwt.verify(token.split(" ")[1], process.env.JSON_TOKEN_KEY)
    //   console.log(validToken)
    //   req.currentUser = validToken?.id;
    //   console.log(`current user: ${req.currentUser}`)
    // }
  
    var res: Boolean = retrieveTokenFromHeader(req, headers);
    if (res == true) {
      console.log("\t======== Current User ========")
      console.log(req.currentUser)
    }

    // retrieve user
    const user = await this.userService.getUserByID(createCommentDTO.author_id);

    // retrieve blog
    const blog = await this.blogService.getBlog(blogID);
    
    return this.commentService.createComment(createCommentDTO, user, blog);

  }

}

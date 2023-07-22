import { Body, Controller, ForbiddenException, Get, Headers, Param, ParseIntPipe, Post, Req, UnauthorizedException } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from 'src/dto/comments.dto';
import { UserService } from 'src/user/user.service';
import { BlogService } from 'src/blog/blog.service';
import * as jwt from "jsonwebtoken";
import { configDotenv } from 'dotenv';
import { Request } from 'express';
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
    const token = headers.authorization
    if (!token) {
      throw new ForbiddenException();
    } else {
      const validToken: any = jwt.verify(token.split(" ")[1], process.env.JSON_TOKEN_KEY)
      console.log(validToken)
      req.currentUser = validToken?.id;
      console.log(`current user: ${req.currentUser}`)
    }

    /*    
    // check if user exists
    const user = await this.userService.getUserByID(createCommentDTO.author_id);
    // throw error if user does not exist
    if (!user) throw new ForbiddenException('Invalid Author');

    // check if blog exists
    const blog = await this.blogService.getBlog(blogID);
    // throw error if blog does not exist
    if (!blog) throw new ForbiddenException('Invalid Blog');
    return this.commentService.createComment(createCommentDTO, user, blog);
*/

  }

}

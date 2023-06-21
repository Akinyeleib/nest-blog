import { Body, Controller, ForbiddenException, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from 'src/dto/comments.dto';
import { UserService } from 'src/user/user.service';
import { BlogService } from 'src/blog/blog.service';

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
  async createComment(@Body() createCommentDTO: CreateCommentDTO): Promise<Comments> {
    // check if user exists
    const user = await this.userService.getUserByID(createCommentDTO.author_id);
    // throw error if user does not exist
    if (!user) throw new ForbiddenException('Invalid Author');

    return this.commentService.createComment(createCommentDTO, user);
  }
}

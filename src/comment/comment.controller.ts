import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entity';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from 'src/dto/comments.dto';

@Controller('blogs/:id/comments')
export class CommentController {
  constructor(public commentService: CommentService) {}
  @Get('/:id')
  getComment(@Param('id', ParseIntPipe) id: number): Promise<Comments> {
    return this.commentService.getComment(id);
  }
  @Get()
  getComments(): Promise<Comments[]> {
    return this.commentService.getComments();
  }
  @Post()
  createComment(@Body() createCommentDTO: CreateCommentDTO): Promise<Comments> {
    return this.commentService.createComment(createCommentDTO);
  }
}

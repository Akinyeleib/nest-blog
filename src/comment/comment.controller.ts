import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { Comments } from 'src/entity/comment.entity';
import { CommentService } from './comment.service';

@Controller('comments')
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
}

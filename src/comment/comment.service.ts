import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDTO } from 'src/dto/comments.dto';
import { Blog } from 'src/entity/blog.entity';
import { Comments } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments) private commentRepository: Repository<Comments>,
    private userService: UserService
  ) {}
  async getComment(id: number): Promise<Comments> {
    return this.commentRepository.findOne({ where: { id }, relations: ['user', 'blog'] });
  }
  async getComments(): Promise<Comments[]> {
    return this.commentRepository.find({ relations: ['user', 'blog'] });
  }
  async createComment(body: CreateCommentDTO, user: User, blog: Blog): Promise<Comments| any> {
    let blogComments = new Comments();

    const { author_id, content } = body;
    blogComments.blog = blog;
    blogComments.author = await this.userService.getUserByID(author_id);
    blogComments.comment = content;
    blogComments.user = user;
    
    return this.commentRepository.save(blogComments);

  }
  
}

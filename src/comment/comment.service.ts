import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDTO } from 'src/dto/comments.dto';
import { Comments } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comments) private commentRepository: Repository<Comments>,
  ) {}
  async getComment(id: number): Promise<Comments> {
    return this.commentRepository.findOne({ where: { id }, relations: ['user', 'blog'] });
  }
  async getComments(): Promise<Comments[]> {
    return this.commentRepository.find({ relations: ['user', 'blog'] });
  }
  async createComment(body: CreateCommentDTO, user: User): Promise<Comments| any> {

    return body;
  }
  
}

import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { Comments } from 'src/entity/comment.entity';
import { BlogModule } from 'src/blog/blog.module';

@Module({
  providers: [CommentService],
  controllers: [CommentController],
  imports: [TypeOrmModule.forFeature([Comments]), BlogModule, UserModule],
})
export class CommentModule {}

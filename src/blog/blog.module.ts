import { Module } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [TypeOrmModule.forFeature([Blog]), UserModule],
  exports: [BlogService],
})
export class BlogModule {}

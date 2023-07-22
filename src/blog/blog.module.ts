import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { UserModule } from 'src/user/user.module';
import { BlogCheckMiddleware } from 'src/middleware/blog.middleware';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [TypeOrmModule.forFeature([Blog]), UserModule],
  exports: [BlogService],
})
export class BlogModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BlogCheckMiddleware).forRoutes('blogs/:id');
  }
}

/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Blog } from './entity/blog.entity';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { Comments } from './entity/comment.entity';

@Module({
  imports: [
    BlogModule, 
    AuthModule, 
    UserModule,
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'nestblog',
        entities: [User, Blog, Comments],
        synchronize: true,
      }
    ),
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

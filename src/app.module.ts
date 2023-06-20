/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { Blog } from './entity/blog.entity';
import { AuthModule } from './auth/auth.module';
import { CommentModule } from './comment/comment.module';
import { Comments } from './entity/comment.entity';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    BlogModule, 
    AuthModule, 
    UserModule,
    TypeOrmModule.forRoot(typeOrmConfig),
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

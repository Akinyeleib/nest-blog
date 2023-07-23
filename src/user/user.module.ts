import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserCheckMiddleware } from 'src/middleware/user.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService],
})
export class UserModule implements NestModule {
  configure (consumer: MiddlewareConsumer) {
    consumer.apply(UserCheckMiddleware).forRoutes('user/:id')
  }
}

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Blog } from 'src/entity/blog.entity';
import { Comments } from 'src/entity/comment.entity';
import { User } from 'src/entity/user.entity';


export const typeOrmConfig: TypeOrmModuleOptions = {  
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'nestblog',
  entities: [User, Blog, Comments],
  synchronize: true,
}

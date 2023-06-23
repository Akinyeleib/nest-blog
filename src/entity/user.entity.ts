import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Blog } from './blog.entity';
import { Comments } from './comment.entity';
import * as bcrypt from 'bcryptjs';

@Entity()
export class User {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  security_question: string;

  @Column()
  security_answer: string;

  @OneToMany(() => Blog, blog => blog.user, {cascade: true})
  blogs: Blog[];

  @OneToMany(() => Comments, comment => comment.user, {cascade: true})
  comments: Comments[];
  
  @BeforeInsert()
  async setPassword(password: string) {
    this.password = await bcrypt.hash(password || this.password, 10);
  }

}

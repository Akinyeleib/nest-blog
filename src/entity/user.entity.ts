/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Blog } from './blog.entity';
import { Comments } from './comment.entity';

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

}

/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Blog } from './blog.entity';

@Entity()
export class Comments {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @CreateDateColumn({
    nullable: true, 
    // default: new Date()
  })
  posted_at: Date;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => User, user => user.comments)
  author: User;

  @ManyToOne(() => Blog, blog => blog.comments)
  blog: Blog;

}

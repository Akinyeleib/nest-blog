/* eslint-disable prettier/prettier */
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Comments } from './comment.entity';

@Entity()
export class Blog {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @CreateDateColumn({nullable: true})
  posted_at: string;

  @UpdateDateColumn({nullable: true})
  updated_at: string;

  @ManyToOne(() => User, user => user.blogs)
  user: User;

  @OneToMany(() => Comments, comment => comment.blog)
  comments: Comments;

}

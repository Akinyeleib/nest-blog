/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Blog } from './blog.entity';

@Entity()
export class Comments {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  comment: string;

  @Column({nullable: true})
  posted_at: string;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @OneToMany(() => Blog, blog => blog.comments)
  blog: Blog[];

}

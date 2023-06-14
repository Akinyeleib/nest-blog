/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Blog {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author_id: number;

  // @Column()
  // author: User;

  @Column()
  content: string;

  @Column()
  posted_at: string;

  @Column()
  updated_at: string;

}

/* eslint-disable prettier/prettier */
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Blog {

  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({nullable: true})
  posted_at: string;

  @Column({nullable: true})
  updated_at: string;

  @ManyToOne(() => User, user => user.blogs)
  user: User;

}

/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  author_id: number;

  @Column()
  content: string;

  @Column()
  posted_at: string;

  @Column()
  updated_at: string;
}

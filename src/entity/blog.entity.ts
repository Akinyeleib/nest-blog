/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Blog {
  @Column()
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  author_id: number;

  @Column()
  @IsNotEmpty()
  content: string;

  @Column()
  posted_at: string;

  @Column()
  updated_at: string;
}

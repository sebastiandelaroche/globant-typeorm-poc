import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { Part } from './part.entity';

@Entity('part_sets')
export class PartSet {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36, unique: true })
  name: string;

  @ManyToMany(type => Part)
  @JoinTable()
  parts: Part[];

}

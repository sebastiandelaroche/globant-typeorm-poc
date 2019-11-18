import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('part_types')
export class PartType {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36, unique: true })
  name: string;

}

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Version } from './version.entity';

@Entity('lod')
export class LoD {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36 })
  name: string;

  @Column({ unique: true })
  order: number;

  @Column({ name: 'is_default', default: false })
  isDefault: boolean;

  @OneToMany(type => Version, version => version.lod)
  versions: Version[];

}

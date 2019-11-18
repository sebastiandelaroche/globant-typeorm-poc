import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { PartType } from './part-type.entity';
import { Version } from './version.entity';

@Entity('parts')
export class Part {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 36 })
  name: string;

  @Column({ length: 36, unique: true })
  partId: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  material: string;

  @Column({ nullable: true })
  system: string;

  @Column({ type: 'json' })
  customFields: any;

  @JoinColumn()
  @OneToOne(type => PartType, partType => partType.id)
  type: PartType;

  @OneToMany(type => Version, version => version.part)
  versions: Version[];

}

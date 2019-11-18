import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { LoD } from './lod.entity';
import { Part } from './part.entity';

@Entity('versions')
export class Version {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'version_number' })
  versionNumber: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'file_urn' })
  fileUrn: string;

  @Column({ name: 'preview_urn', nullable: true })
  previewUrn: string;

  @ManyToOne(type => Part, part => part.versions)
  part: Part;

  @ManyToOne(type => LoD, lod => lod.versions)
  lod: LoD;

}

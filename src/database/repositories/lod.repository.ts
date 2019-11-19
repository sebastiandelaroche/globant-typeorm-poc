import { EntityRepository, Repository } from 'typeorm';
import { LoD } from '../entities/lod.entity';

@EntityRepository(LoD)
export default class LoDRepository extends Repository<LoD> { }

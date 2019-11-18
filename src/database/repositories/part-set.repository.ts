import { EntityRepository, Repository } from 'typeorm';
import { PartSet } from '../entities/part-set.entity';

@EntityRepository(PartSet)
export default class PartSetRepository extends Repository<PartSet> { }

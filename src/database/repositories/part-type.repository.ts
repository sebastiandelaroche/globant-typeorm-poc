import { EntityRepository, Repository } from 'typeorm';
import { PartType } from '../entities/part-type.entity';

@EntityRepository(PartType)
export default class PartTypeRepository extends Repository<PartType> { }

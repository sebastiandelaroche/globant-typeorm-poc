import { EntityRepository, Repository } from 'typeorm';
import { Part } from '../entities/part.entity';

@EntityRepository(Part)
export default class PartRepository extends Repository<Part> { }

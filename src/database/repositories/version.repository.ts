import { EntityRepository, Repository } from 'typeorm';
import { Version } from '../entities/version.entity';

@EntityRepository(Version)
export default class VersionRepository extends Repository<Version> { }

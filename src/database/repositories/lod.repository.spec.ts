import { getCustomRepository } from 'typeorm';

import { init } from '../module';
import LoDRepository from './lod.repository';

describe.skip('LoD Repository', () => {
  let repository;

  beforeAll(async () => {
    await init();
    repository = getCustomRepository(LoDRepository);
  });

  it('find all by join', async () => {
    const data = await repository.createQueryBuilder('lod')
      .leftJoinAndSelect('lod.versions', 'versions')
      .getMany();

    console.log('data', data);
  });

  it('find one by join', async () => {
    const data = await repository.createQueryBuilder('lod')
      .leftJoinAndSelect('lod.versions', 'versions')
      .getOne();

    console.log('data', data);
  });

});

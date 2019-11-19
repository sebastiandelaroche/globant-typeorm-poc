import { getCustomRepository } from 'typeorm';

import { init } from '../module';
import PartRepository from './part.repository';
import { listenerCount } from 'cluster';

describe.only('Part Repository', () => {
  let repository;

  beforeAll(async () => {
    await init();
    repository = getCustomRepository(PartRepository);
  });

  // it('find all by join', async () => {
  //   const data = await repository.createQueryBuilder('lod')
  //     .leftJoinAndSelect('lod.versions', 'versions')
  //     .getMany();

  //   console.log('data', data);
  // });

  // it('find one by join', async () => {
  //   const data = await repository.createQueryBuilder('lod')
  //     .leftJoinAndSelect('lod.versions', 'versions')
  //     .getOne();

  //   console.log('data', data);
  // });

  // it('find one json field', async () => {
  //   const data = await repository.createQueryBuilder('part')
  //     .where(`part.customFields ::jsonb @> \'{"height": 10 }\'`)
  //     .getOne();

  //   console.log('data', data);
  // });

  it('custom queries', async () => {
    const data = await repository.query('SELECT * FROM parts;');
    console.log('data', data);
  });

});

import { createConnection, ConnectionOptions } from 'typeorm';

const optsDB: ConnectionOptions = {
  type: 'postgres',
  // TODO: this should go in an environment variable
  url: 'postgresql://root:password@0.0.0.0/trades_service',
  entities: [__dirname + '/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  logging: ['error'],
};

export const init = async () => {

  const connection = await createConnection(optsDB);

  await connection.runMigrations();

  return connection;

};

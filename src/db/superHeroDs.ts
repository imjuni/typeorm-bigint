import SuperHero2Entity from '#entities/SuperHero2Entity';
import SuperHeroEntity from '#entities/SuperHeroEntity';
import { DataSource } from 'typeorm';
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions.js';

const superHeroDbOption: MysqlConnectionOptions = {
  type: 'mysql',
  connectorPackage: 'mysql2',
  database: 'biginttest',
  timezone: 'Z',
  supportBigNumbers: true,
  bigNumberStrings: true,
  entities: [SuperHeroEntity, SuperHero2Entity],
};

function getSuperHeroDbDataSource() {
  const option: MysqlConnectionOptions = {
    ...superHeroDbOption,
    host: 'localhost',
    port: 15000,
    username: 'root',
    password: process.env.PW,
  };

  return new DataSource(option);
}

export default getSuperHeroDbDataSource;

import getSuperHeroDbDataSource from '#db/superHeroDs';
import SuperHeroEntity from '#entities/SuperHeroEntity';
import { faker } from '@faker-js/faker';
import { isError, populate } from 'my-easy-fp';

const handler = async () => {
  const db = getSuperHeroDbDataSource();
  await db.initialize();

  const bigs = [
    '36028797018963970', // 2^55
    '288230376151711740', // 2^58
    '1152921504606847000', // 2^60
    '1152921504606847', // 2^60
    '18446744073709500',
    '18446744073709552000',
  ];
  const kinds = ['marvel', 'dc'];

  const heroes = populate(5000).map(() => {
    const p1 = faker.random.numeric(3);
    const p2 = p1.toString().padStart(3, '0');

    const entity = new SuperHeroEntity();
    entity.property = `${bigs[3]!}${p2}`;
    entity.kind = kinds[parseInt(faker.random.numeric(10), 10) % 2] ?? 'marvel';
    entity.name = faker.name.fullName();
    return entity;
  });

  const entity = new SuperHeroEntity();
  entity.property = '0';
  entity.kind = kinds[parseInt(faker.random.numeric(10), 10) % 2] ?? 'marvel';
  entity.name = faker.name.fullName();

  heroes.push(entity);

  await db
    .getRepository(SuperHeroEntity)
    .createQueryBuilder()
    .insert()
    .into(SuperHeroEntity)
    .values(heroes)
    .execute();

  await db.destroy();
};

handler().catch((caught) => {
  const err = isError(caught, new Error('unknown error raised'));
  console.error(err.message);
  console.error(err.stack);
});

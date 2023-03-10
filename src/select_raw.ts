import getSuperHeroDbDataSource from '#db/superHeroDs';
import SuperHero2Entity from '#entities/SuperHero2Entity';
import { isError } from 'my-easy-fp';
import { raw } from 'mysql2';

const handler = async () => {
  const db = getSuperHeroDbDataSource();
  await db.initialize();

  const qb = db
    .getRepository(SuperHero2Entity)
    .createQueryBuilder('sh')
    .where('kind = :kind', { kind: 'marvel' })
    .andWhere('property > :property', { property: raw('1152921504606847000') });

  console.log(await qb.getMany());

  await db.destroy();
};

handler().catch((caught) => {
  const err = isError(caught, new Error('unknown error raised'));
  console.error(err.message);
  console.error(err.stack);
});

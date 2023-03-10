import getSuperHeroDbDataSource from '#db/superHeroDs';
import SuperHeroEntity from '#entities/SuperHeroEntity';
import { isError } from 'my-easy-fp';

const handler = async () => {
  const db = getSuperHeroDbDataSource();
  await db.initialize();

  const qb = db
    .getRepository(SuperHeroEntity)
    .createQueryBuilder('sh')
    .where('kind = :kind', { kind: 'marvel' })
    .andWhere('property > :property', { property: '1152921504606847000' });

  console.log(await qb.getMany());

  await db.destroy();
};

handler().catch((caught) => {
  const err = isError(caught, new Error('unknown error raised'));
  console.error(err.message);
  console.error(err.stack);
});

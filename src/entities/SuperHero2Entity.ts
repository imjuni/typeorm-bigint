import SuperHeroEntity from '#entities/SuperHeroEntity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'super_hero', engine: 'InnoDB', synchronize: false })
export default class SuperHero2Entity extends SuperHeroEntity {
  @Column({
    name: 'property',
    type: 'bigint',
  })
  property!: string;
}

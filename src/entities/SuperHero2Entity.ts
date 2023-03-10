import SuperHeroEntity from '#entities/SuperHeroEntity';
import { Entity } from 'typeorm';

@Entity({ name: 'super_hero', engine: 'InnoDB', synchronize: false })
export default class SuperHero2Entity extends SuperHeroEntity {}

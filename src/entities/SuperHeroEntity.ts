import { raw } from 'mysql2';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('idx__kind_property', ['kind', 'property'])
@Entity({ name: 'super_hero', engine: 'InnoDB' })
export default class SuperHeroEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
    unsigned: true,
  })
  id!: string;

  @Column({
    name: 'kind',
    type: 'char',
    length: 10,
  })
  kind!: string;

  @Column({
    name: 'property',
    type: 'bigint',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-return
    transformer: { to: (value) => raw(value), from: (value) => value },
  })
  property!: string;

  @Column({
    name: 'name',
    type: 'varchar',
    length: 200,
  })
  name!: string;
}

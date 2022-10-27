import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntityConstants } from '../constants/user-entity-constants';

@Entity({ name: UserEntityConstants.table })
export class User {
  @PrimaryGeneratedColumn({ name: UserEntityConstants.id })
  id: number;

  @Column({ name: UserEntityConstants.name })
  name: string;

  @Column({ name: UserEntityConstants.age })
  age: number;
}

import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Roles {
  @PrimaryColumn()
  id: number;
  @Column()
  name: number;
  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}

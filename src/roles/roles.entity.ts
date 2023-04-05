import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToMany, PrimaryColumn } from 'typeorm';

@Entity()
export class Roles {
  @PrimaryColumn()
  id: number;
  @Column()
  name: number;
  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Logs {
  @PrimaryColumn()
  id: number;
  @Column()
  path: string;
  @Column()
  method: string;
  @Column()
  data: string;
  @Column()
  result: number;
  @ManyToOne(() => User, (user) => user.logs)
  @JoinColumn()
  user: User;
}

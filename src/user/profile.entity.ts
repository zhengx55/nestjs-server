import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Profile {
  @PrimaryColumn()
  id: number;
  @Column()
  gender: number;
  @Column()
  photo: string;
  @Column()
  address: string;
  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

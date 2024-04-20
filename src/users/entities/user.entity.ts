import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { roles } from './role.entity';
import { Exclude } from 'class-transformer';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @ManyToOne(() => roles, (roles) => roles.users, { nullable: false })
  role: roles;
}

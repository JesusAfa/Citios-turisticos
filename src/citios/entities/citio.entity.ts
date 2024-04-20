import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Citio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  dirreccion: string;

  @Column()
  barrio: string;
}

import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';
import { Users } from 'src/users/entities/users.entity';

@Entity({
  name: 'informations',
})
export class Information {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  date: string;

  @Column()
  user: number;
}

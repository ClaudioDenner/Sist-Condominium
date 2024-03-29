import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

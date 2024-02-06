import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({
  name: 'finances',
})
export class Finance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  expiration: string;

  @Column()
  value: number;

  @Column()
  status: string;

  @Column()
  user: number;
}

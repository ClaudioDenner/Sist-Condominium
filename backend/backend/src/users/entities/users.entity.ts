import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({
  name: 'users',
})
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  level?: string;

  //@OneToMany(() => Information, (info) => info.user, { cascade: true })
  //informations: Information[];
}

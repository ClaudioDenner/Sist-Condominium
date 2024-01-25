import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { Users } from '../../../src/users/entities/users.entity';
import * as bcrypt from 'bcrypt';

export class UserAdminSeeder implements Seeder {
  track = false;

  public async run(dataSource: DataSource): Promise<any> {
    //
    const repository = dataSource.getRepository(Users);
    //
    const salt = await bcrypt.genSalt();
    //
    const hash = await bcrypt.hash('admin', salt);
    //
    const data = {
      email: 'bau@admin.com',
      password: hash,
      level: 'admin',
    };
    //
    const newUser = repository.create(data);
    await repository.save(newUser);
  }
}

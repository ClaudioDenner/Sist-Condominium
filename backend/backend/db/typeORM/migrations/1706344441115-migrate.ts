import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class Migrate1706344441115 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash('123456', salt);

    await queryRunner.query(
      `INSERT INTO users (email, password) VALUES ("user@condominio.com","${password}")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM users WHERE id=1`);
  }
}

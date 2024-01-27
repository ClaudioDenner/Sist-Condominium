import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1706140737835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE users(id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, email VARCHAR(100) NOT NULL UNIQUE,password VARCHAR(100) NOT NULL, level VARCHAR(10) DEFAULT "user" NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE users`);
  }
}

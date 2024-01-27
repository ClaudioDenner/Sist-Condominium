import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1706346783125 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE informations (id INT PRIMARY KEY AUTO_INCREMENT NOT NULL, title VARCHAR(50) NOT NULL, body TEXT NOT NULL, date TIMESTAMP NOT NULL, id_user INT, FOREIGN KEY (id_user) REFERENCES users(id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE informations`);
  }
}

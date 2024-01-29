import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1706349151762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE concierge (id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT, full_name VARCHAR(100) NOT NULL, cpf VARCHAR(15) NOT NULL, email VARCHAR(100) NOT NULL, user INT NOT NULL, FOREIGN KEY (user) REFERENCES users(id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE concierge`);
  }
}

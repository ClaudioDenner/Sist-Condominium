import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1706484858369 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE finances (id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT, expiration VARCHAR(30) NOT NULL, value FLOAT NOT NULL, status VARCHAR(20) DEFAULT "pending" NOT NULL, user INT, FOREIGN KEY (user) REFERENCES users(id))`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE finances`);
  }
}

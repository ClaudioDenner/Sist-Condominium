import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrate1706486576678 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `CREATE TABLE registerAccessConcierge(id INT NOT NULL  PRIMARY KEY AUTO_INCREMENT, entry VARCHAR(30) NOT NULL, exit VARCHAR(30) NOT NULL, people INT, FOREIGN KEY (people) REFERENCES concierge(id))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE register_access_concierge`);
  }
}

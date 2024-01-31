import { MigrationInterface, QueryRunner } from 'typeorm';

const year = new Date().getFullYear();

const data = {
  one: { expiration: `05/01/${year}` },
  two: { expiration: `05/02/${year}` },
  three: { expiration: `05/03/${year}` },
  four: { expiration: `05/04/${year}` },
  five: { expiration: `05/01/${year}` },
  six: { expiration: `05/06/${year}` },
  seven: { expiration: `05/07/${year}` },
  eight: { expiration: `05/08/${year}` },
  nine: { expiration: `05/09/${year}` },
  teen: { expiration: `05/10/${year}` },
  eleven: { expiration: `05/11/${year}` },
  twelve: { expiration: `05/12/${year}` },
};

export class Migrate1706660385343 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `INSERT INTO finances (expiration, value, user) VALUES ("${data.one.expiration}",200,2),("${data.two.expiration}",200,2), ("${data.three.expiration}",200,2),("${data.four.expiration}",200,2),("${data.five.expiration}",200,2),("${data.six.expiration}",200,2),("${data.seven.expiration}",200,2),("${data.eight.expiration}",200,2),("${data.nine.expiration}",200,2),("${data.teen.expiration}",200,2),("${data.eleven.expiration}",200,2),("${data.twelve.expiration}",200,2)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

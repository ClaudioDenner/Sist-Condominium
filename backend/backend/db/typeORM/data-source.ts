import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'Condominio',
  migrations: [`${__dirname}/migrations/**/*.ts`],
});

export default dataSource;

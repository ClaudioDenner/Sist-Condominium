import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'Condominio',
  migrations: [`${__dirname}/migrations/**/*.ts`],
  entities: ['src/**/*entity{.ts,.js}'],
});

export default dataSource;

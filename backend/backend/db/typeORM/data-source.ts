import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_ROOT,
  password: process.env.PASS,
  database: process.env.DB_NAME,
  migrations: [`${__dirname}/migrations/**/*.ts`],
};

const dataSource = new DataSource(options);

export default dataSource;

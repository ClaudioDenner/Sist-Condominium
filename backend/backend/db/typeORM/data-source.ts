import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const options: DataSourceOptions & SeederOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'Condominio',
  migrations: [`${__dirname}/migrations/**/*.ts`],
};

const dataSource = new DataSource(options);

export default dataSource;

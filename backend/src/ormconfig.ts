import {ConnectionOptions} from "typeorm";

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'post123',
  database: 'social',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true
}

export default config;
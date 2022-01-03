import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const mssqlTypeormConfig: TypeOrmModuleOptions = {
  name: 'default',
  type: 'mssql',
  host: process.env.MSSQL_HOST,
  port: parseInt(<string>process.env.MSSQL_PORT),
  username: process.env.MSSQL_USER,
  password: process.env.MSSQL_PASSWORD,
  database: process.env.MSSQL_DATABASE,
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  migrationsRun: true,
  options: { encrypt: false },
  migrations: ['dist/src/db/migration/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/db/migration',
  },
};

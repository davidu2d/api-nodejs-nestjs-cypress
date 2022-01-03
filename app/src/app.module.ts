import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { configuration } from 'config/configuration';
import { ClientModule } from './client/client.module';
import * as redisStore from 'cache-manager-redis-store';
import { CacheCustomModule } from './shared/cache.module';
import { mssqlTypeormConfig } from 'config/mssql.typeorm.config';

@Module({
  imports: [
    UsersModule,
    ClientModule,
    AuthModule,
    CacheCustomModule,
    ConfigModule.forRoot({
      isGlobal: true,
      //DESCOMENTAR EM AMBIENTES DE DES, HOM E PRD, ASSIM O APP VAI BUSCAR OS PARAMETROS NO .env RAIZ DO PROJETO AMBIENTE LOCAL
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
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
    }),
    TypeOrmModule.forRoot({
      name: 'mongodb',
      type: 'mongodb',
      //url: 'mongodb://root:example@localhost:27017/test',
      host: process.env.MONGO_HOST,
      port: parseInt(<string>process.env.MONGO_PORT),
      username: process.env.MONGO_USER,
      password: process.env.MONGO_PASSWORD,
      database: process.env.MONGO_DATABASE,
      autoLoadEntities: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      ttl: parseInt(<string>process.env.REDIS_TTL),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

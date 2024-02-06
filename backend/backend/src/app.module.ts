import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/users.entity';
import { Information } from './information/entities/information.entity';
import { InformationModule } from './information/information.module';
import { ConciergeModule } from './concierge/concierge.module';
import { FinancesModule } from './finances/finances.module';
import { Finance } from './finances/entities/finance.entity';
@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_ROOT,
      password: process.env.PASS,
      database: process.env.DB_NAME,
      entities: [Users, Information, Finance],
      synchronize: false,
    }),
    InformationModule,
    ConciergeModule,
    FinancesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

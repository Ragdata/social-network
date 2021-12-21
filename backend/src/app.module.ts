import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from './authorization/authorization.module';
import {  TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "./ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), AuthorizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

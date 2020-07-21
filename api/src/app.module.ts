import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivosModule } from './activos/activos.module';
import { from } from 'rxjs';
import { rootCertificates } from 'tls';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql'
      host: 'localhost',
      port: 32769,
      username: 'root',
      password: '12345678'
      database: 'activos_fijos',
    }),
    ActivosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([{ name: 'CHAT', transport: Transport.TCP }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

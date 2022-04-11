import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello form auth service');
    return this.appService.getHello();
  }
  @EventPattern('auth')
  handleAuth(auth) {
    console.log('auth', auth);
  }
}

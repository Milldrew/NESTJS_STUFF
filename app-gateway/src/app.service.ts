import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CHAT')
    private readonly chatClient: ClientProxy,
  ) {}
  getHello(): string {
    this.chatClient.emit('message', 'message');
    return 'Hello World!';
  }
}

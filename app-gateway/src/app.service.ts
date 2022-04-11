import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH')
    private readonly authClient: ClientProxy,
    @Inject('CHAT')
    private readonly chatClient: ClientProxy,
  ) {}
  getHello(): string {
    this.chatClient.emit('message', 'message');
    this.authClient.emit('auth', 'auth');
    return 'Hello World!';
  }
}

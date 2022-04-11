import { Injectable } from '@nestjs/common';
import { ChatGateway } from './chat.gateway';

@Injectable()
export class AppService {
  constructor(private readonly chatGateway: ChatGateway) {}
  getHello(): string {
    return 'Hello World!';
  }

  handleMessage(data: string) {
    this.chatGateway.handleMessage({ data });
  }
}

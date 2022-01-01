import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}

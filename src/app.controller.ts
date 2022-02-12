import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Hello World!')
@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({summary: 'Test hello world'})
  @ApiResponse({status: 200, type: String})
  @Get('/hello')
  @HttpCode(200)
  getHello(): string {
    return this.appService.getHello();
  }
}

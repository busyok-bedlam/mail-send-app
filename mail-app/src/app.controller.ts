import { Controller, Get, Body, Post } from '@nestjs/common';
import { ValidationPipe, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
			private readonly appService: AppService,
			private readonly config: ConfigService
	) {}

  @Post("send-message")
	@UsePipes(new ValidationPipe())
	async	sendMessage(@Body() messageBody) {
		try {
			await this.appService.sendMessage(messageBody);
		}
		catch(err) {
			throw err;
		}
	}
}

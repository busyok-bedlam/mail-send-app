import { Controller, Get, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
			private readonly appService: AppService,
			private readonly config: ConfigService
	) {}

  @Post("send-message")
	async	sendMessage(@Body() messageBody) {
		try {
			await appService.sendMessage(messageBody);
			console.log('Success');
		}
		catch(err) {
			console.log(err);
		}
	}
}

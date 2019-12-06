import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from './config/config.service';

@Controller()
export class AppController {
  constructor(
			private readonly appService: AppService,
			private readonly config: ConfigService
	) {}

  @Get("send-message")
  getHello(): string {
		const data = this.config.get("DOMAIN")
    return data;
  }
}

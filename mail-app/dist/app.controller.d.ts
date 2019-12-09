import { AppService } from './app.service';
import { ConfigService } from './config/config.service';
export declare class AppController {
    private readonly appService;
    private readonly config;
    constructor(appService: AppService, config: ConfigService);
    sendMessage(messageBody: any): Promise<void>;
}

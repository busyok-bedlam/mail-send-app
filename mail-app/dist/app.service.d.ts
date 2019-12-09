import { MessagesService } from './messages/messages.service';
export declare class AppService {
    private readonly messageService;
    constructor(messageService: MessagesService);
    getHello(): string;
    sendMessage(message: any): Promise<any>;
}

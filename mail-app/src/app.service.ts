import { Injectable } from '@nestjs/common';
import { MessagesService } from './messages/messages.service';

@Injectable()
export class AppService {
	constructor(private readonly messageService: MessagesService){};
	getHello(): string {
		return 'Hello World!';
	}
	async sendMessage(message): Promise<any>{
		try {
			const savedMessage = await this.messageService.saveMessage(message);
			console.log('message saved and sended');

		}
		catch(err){
			console.log(err)
		}
	}
}

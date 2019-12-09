import { Injectable } from '@nestjs/common';
import MessageModel from './schema/message.schema'
@Injectable()
export class MessagesService {
	async saveMessage(message): Promise<any>{
		try {
			const savedMessage = await new MessageModel(message).save();
			return savedMessage;
		}
		catch(err){
			console.log(err);
		}
	}	
}

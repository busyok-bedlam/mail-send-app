import { Injectable } from '@nestjs/common';
import { InjectModel  } from '@nestjs/mongoose';
import { Model  } from 'mongoose';
import { MessageInterface } from './interfaces/message.interface';


@Injectable()
export class MessagesService {
	constructor(@InjectModel('Messages')  private readonly messageModel: Model<MessageInterface>){

	};
	async saveMessage(message): Promise<any>{
		try {
			const savedMessage = await new this.messageModel(message).save();
			return savedMessage;
		}
		catch(err){
			throw err;
		}
	}	
}

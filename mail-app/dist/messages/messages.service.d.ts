import { Model } from 'mongoose';
import { MessageInterface } from './interfaces/message.interface';
export declare class MessagesService {
    private readonly messageModel;
    constructor(messageModel: Model<MessageInterface>);
    saveMessage(message: any): Promise<any>;
}

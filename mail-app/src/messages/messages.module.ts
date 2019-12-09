import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageSchema } from './schema/message.schema';

@Module({
	imports: [MongooseModule.forFeature([{name: 'Messages', schema: MessageSchema }])],
	exports: [MessagesService],
	providers: [MessagesService],
	controllers: [MessagesController]
})
export class MessagesModule { }

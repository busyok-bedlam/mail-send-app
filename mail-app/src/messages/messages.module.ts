import { Module } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesController } from './messages.controller';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://bulat:(_omar4hayam_)@cluster0-kglzf.mongodb.net/test?retryWrites=true&w=majority')],
  providers: [MessagesService],
  controllers: [MessagesController]
})
export class MessagesModule {}

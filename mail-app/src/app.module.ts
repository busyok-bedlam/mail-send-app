import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { MailgunModule } from './mailgun/mailgun.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [MessagesModule, MailgunModule, ConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

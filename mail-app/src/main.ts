import { NestFactory } from '@nestjs/core';
import { ValidationPipe, BadRequestException, ValidationError } from '@nestjs/common';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/filters/validation.filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(new ValidationPipe());
	app.useGlobalFilters(new HttpExceptionFilter());
	await app.listen(3000);
}
bootstrap();

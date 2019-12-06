import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
dotenv.config();

@Injectable()
export class ConfigService {
	get(key: string): string {
		let result = `${process.env[key]}`
		return result || "XX" ;
	}
}

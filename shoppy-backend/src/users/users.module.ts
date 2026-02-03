import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import {ConfigModule} from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot(), UsersModule],
	controllers: [],
	providers: [UsersService],
})
export class UsersModule {}

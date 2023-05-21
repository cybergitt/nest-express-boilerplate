import { Module } from '@nestjs/common';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { ConfigModule } from '@nestjs/config';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true, // use module globally
    envFilePath: ['.env.local'], // set multiple env paths if needed
  }), CoreModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { WorkspaceModule } from './workspace/workspace.module';
import { BoardsModule } from './boards/boards.module';

@Module({
  imports: [AuthModule, UserModule, AuthModule, WorkspaceModule, BoardsModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

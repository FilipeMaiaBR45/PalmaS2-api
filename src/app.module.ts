import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PalmalModule } from './palmal/palmal.module';
import { ReboleiraModule } from './reboleira/reboleira.module';
import { EstacaoModule } from './estacao/estacao.module';
import { RaqueteModule } from './raquete/raquete.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@Module({
  imports: [
    UserModule,
    PalmalModule,
    ReboleiraModule,
    EstacaoModule,
    RaqueteModule,
    PrismaModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}

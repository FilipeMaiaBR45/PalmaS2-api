import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PalmalModule } from './palmal/palmal.module';
import { ReboleiraModule } from './reboleira/reboleira.module';
import { EstacaoModule } from './estacao/estacao.module';
import { RaqueteModule } from './raquete/raquete.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    UserModule,
    PalmalModule,
    ReboleiraModule,
    EstacaoModule,
    RaqueteModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

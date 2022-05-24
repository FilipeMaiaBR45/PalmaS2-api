import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PalmalModule } from './palmal/palmal.module';
import { ReboleiraModule } from './reboleira/reboleira.module';
import { EstacaoModule } from './estacao/estacao.module';
import { RaqueteModule } from './raquete/raquete.module';

@Module({
  imports: [
    UserModule,
    PalmalModule,
    ReboleiraModule,
    EstacaoModule,
    RaqueteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

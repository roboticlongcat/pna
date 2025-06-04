import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import {Stock} from "./entities/stock.entity";
import {FileService} from "../file.service";

@Module({
  controllers: [StocksController],
  providers: [
    StocksService,
    {
      provide: FileService,
      useFactory: () => new FileService<Stock[]>('assets/stocks.json'),
    },
  ],
})
export class StocksModule {}

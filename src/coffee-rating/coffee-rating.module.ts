import { CoffeesModule } from './../coffees/coffees.module';
import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule.register({
        type: 'postgres',
    host: 'localhost',
    port: 5432,
  }), CoffeesModule],
  providers: [CoffeeRatingService]
})
export class CoffeeRatingModule {}

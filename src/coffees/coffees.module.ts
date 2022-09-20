import { Injectable, Module, Scope } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import CoffeesConfig from './config/coffees.config';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';
import coffeesConfig from './config/coffees.config';

export class MockCoffeesService { }

class ConfigService { }
class DevelopmentConfigService { }
class ProductionConfigService { }

@Injectable()
export class CoffeeBrandsFactory {
  create()
  {
    return ['buddy brew', 'nescafe']
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event]), ConfigModule.forFeature(coffeesConfig)], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEE_BRANDS, // 👈
      useFactory: () => ['buddy brew', 'nescafe'],
      scope: Scope.TRANSIENT,
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule { }
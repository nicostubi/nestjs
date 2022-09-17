import { CoffeeRefactor1663434077889 } from "./src/migrations/1663434077889-CoffeeRefactor";
import { DataSource } from "typeorm";
import { Coffee } from "./src/coffees/entities/coffee.entity";
import { Flavor } from "./src/coffees/entities/flavor.entity";

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1663434077889],
});

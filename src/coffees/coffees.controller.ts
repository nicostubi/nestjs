import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Res,
    Query
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) {}

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        // const { limit, offset } = paginationQuery; 
        return this.coffeesService.findAll(paginationQuery);
    }

    // @Get()
    // findAll(@Query() paginationQuery) {
    //     const { limit, offset } = paginationQuery; 
    //     return `this action returns all coffees. Limit: ${limit}, offset: ${offset}`
    // }

    @Get(':id')
    findOne(@Param('id') id: number) {
        console.log(typeof id)
        return this.coffeesService.findOne(''+id);
    }
    
    // @Get(':id')
    // findOne(@Param('id') id: string)
    // {
    //     return `This action returns #${id} coffee`
    // }

     @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) 
     {
        console.log(createCoffeeDto instanceof CreateCoffeeDto)
        return this.coffeesService.create(createCoffeeDto);
    }

    // @Post()
    // create(@Body() body) 
    // {
    //     return this.coffeesService.create(body);
    // }

    // @Post()
    // create(@Body() body) 
    // {
    //     return body
    // }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto)
    {
        return this.coffeesService.update(id, updateCoffeeDto);
    }
    
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() body)
    // {
    //     return this.coffeesService.update(id, body);
    // }
    
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() body)
    // {
    //     return `This actions updates #${id} coffee`
    // }


    @Delete(':id')
    remove(@Param('id') id: string)
    {
        return this.coffeesService.remove(id);
    }

    // @Delete(':id')
    // remove(@Param('id') id: string)
    // {
    //     return `This actions removes #${id} coffee`
    // }


    // // @Get('flavors')
    // // findAll() {
    // //     return 'this action returns all coffees'
    // // }

    // @Get()
    // findAll(@Res() response) {
    //     response.status(200).send('this action returns all coffees')
    // }

    // @Get(':id')
    // findOne(@Param('id') id: string)
    // {
    //     return `This action returns #${id} coffee`
    // }


    // @Post()
    // @HttpCode(HttpStatus.GONE)
    // create(@Body() body)
    // {
    //     return body
    // }

    // // @Post()
    // // create(@Body('name') body)
    // // {
    // //     return body
    // // }


}

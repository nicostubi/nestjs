import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { get } from 'http';

@Controller('coffees')
export class CoffeesController {


    @Get()
    findAll() {
        return 'this action returns all coffees'
    }

    @Get(':id')
    findOne(@Param('id') id: string)
    {
        return `This action returns #${id} coffee`
    }


    @Post()
    create(@Body() body)
    {
        return body
    }


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

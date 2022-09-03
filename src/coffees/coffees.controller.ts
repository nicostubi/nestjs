import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body)
    {
        return `This actions updates #${id} coffee`
    }

    @Delete(':id')
    remove(@Param('id') id: string)
    {
        return `This actions removes #${id} coffee`
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

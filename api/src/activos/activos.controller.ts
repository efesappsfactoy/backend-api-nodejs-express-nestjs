import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import { CreateActivoDto } from './dto/create-activo.dto';
import { ActivosService } from './activos.service';
import { Activo } from './interfaces/activo.interface';

@Controller('activos')
export class ActivosController {
    constructor(private activosService: ActivosService) {}

    @Post()
    async crear(@Body() createActivoDto: CreateActivoDto) {
        this.activosService.crear(createActivoDto);
    }

    @Get()
    async buscarTodos(): Promise<Activo[]> {
        return this.activosService.buscarTodos();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string) {

    }

    @Put(':id')
    actualizar(@Param('id') id: string) {

    }

    @Delete(':id')
    eliminar(@Param('id') id: string) {

    }
}

import { Injectable } from '@nestjs/common';
import { Activo } from './interfaces/activo.interface';

@Injectable()
export class ActivosService {
    private readonly activos: Activo[] = [];

    crear(activo: Activo) {
        this.activos.push(activo);
    }

    buscarTodos(): Activo[] {
        return this.activos;
    }
}

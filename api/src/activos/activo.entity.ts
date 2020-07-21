import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Activo {
    @PrimaryGeneratedColumn()
    codigo: number;

    @Column()
    descripcion: string;

    @Column()
    marca: string;

    @Column()
    fechaCompra: Date;

    @Column()
    montoCompra: number;

    @Column()
    vidaUtil: number;
}
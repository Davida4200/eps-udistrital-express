import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Doctor } from './doctores.model'
import { Paciente } from './paciente.model'
import { Consultorio } from './consultorio.model';
import { Especialidad } from './especialidad.model';

@Table({
  timestamps: false,
  tableName: 'cita'
})
export class Cita extends Model {
  @Column({
    type: DataType.DATE,
    allowNull: false,
    primaryKey: true
  })
  fecha_hora!: Date

  @PrimaryKey
  @ForeignKey( () => Doctor)
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cedula_profesional!: string

  @PrimaryKey
  @ForeignKey( () => Paciente)
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cedula_paciente!: string

  @ForeignKey( () => Consultorio)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_consultorio!: string

  @ForeignKey( () => Especialidad)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_especialidad!: string

  @BelongsTo( () => Doctor)
  doctor!: Doctor;
  @BelongsTo( () => Paciente)
  paciente!: Paciente;
  @BelongsTo( () => Consultorio)
  consultorio!: Consultorio;
  @BelongsTo( () => Especialidad)
  especialidad!: Especialidad;
}
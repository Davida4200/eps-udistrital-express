import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { DoctorEspecialidad } from './dEspecialidad.model';
import { Cita } from './cita.model';

@Table({
  timestamps: false,
  tableName: 'especialidad'
})
export class Especialidad extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true
  })
  id_especialidad!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre_especialidad!: string

  @HasMany( () => DoctorEspecialidad)
  doctorEspecialidad!: DoctorEspecialidad []
  @HasMany( () => Cita)
  cita!: Cita []
}
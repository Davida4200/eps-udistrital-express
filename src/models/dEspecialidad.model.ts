import { Table, Column, Model, DataType, BelongsTo, PrimaryKey, ForeignKey } from 'sequelize-typescript';
import { Doctor } from './doctores.model';
import { Especialidad } from './especialidad.model';

@Table({
  timestamps: false,
  tableName: 'doctor_especialidad'
})
export class DoctorEspecialidad extends Model {
  @PrimaryKey
  @ForeignKey( () => Doctor)
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
  })
  cedula_profesional!: string

  @PrimaryKey
  @ForeignKey( () => Especialidad)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  id_especialidad!: string

  @BelongsTo( () => Doctor)
  doctor!: Doctor;
  @BelongsTo( () => Especialidad)
  especialidad!: Especialidad;
}
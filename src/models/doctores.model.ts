import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './cita.model'

@Table({
  timestamps: false,
  tableName: 'doctor'
})
export class Doctor extends Model {
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
    primaryKey: true
  })
  cedula_profesional!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombre!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  correo!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefono!: string

  @HasMany( () => Cita)
  cita!: Cita []
}
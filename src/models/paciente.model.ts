import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './cita.model'

@Table({
  timestamps: false,
  tableName: 'paciente'
})
export class Paciente extends Model {
  @Column({
    type: DataType.STRING(14),
    allowNull: false,
    primaryKey: true
  })
  cedula_paciente!: string

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
    type: DataType.DATE,
    allowNull: false,
  })
  fecha_nacimiento!: Date

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telefono!: string

  @HasMany( () => Cita)
  cita!: Cita []
}

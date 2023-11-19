import { timeStamp } from 'console';
import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './cita.model'

@Table({
  timestamps: false,
  tableName: 'doctor'
})
export class Doctor extends Model {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true
  })
  id_profesional!: number

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

  @Column({
    type: DataType.ENUM('medicina_interna', 'medicina_general'),
    allowNull: false,
  })
  especialidad!: string

  @HasMany( () => Cita)
  cita!: Cita []
}
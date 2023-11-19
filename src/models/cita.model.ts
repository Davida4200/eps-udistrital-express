import { Table, Column, Model, DataType, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Doctor } from './doctores.model'
import { Paciente } from './paciente.model'

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
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_profesional!: number

  @PrimaryKey
  @ForeignKey( () => Paciente)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_numeroCedula!: number
  @BelongsTo( () => Doctor)
  doctor!: Doctor;
  @BelongsTo( () => Paciente)
  paciente!: Paciente;
}
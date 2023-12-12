import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Cita } from './cita.model';

@Table({
  timestamps: false,
  tableName: 'consultorio'
})
export class Consultorio extends Model {
  @Column({
    type: DataType.STRING(10),
    allowNull: false,
    primaryKey: true
  })
  id_consultorio!: string

  @HasMany( () => Cita)
  cita!: Cita []
}
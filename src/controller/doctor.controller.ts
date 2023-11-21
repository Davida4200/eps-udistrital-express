import { RequestHandler } from 'express'
import { Doctor } from '../models/doctores.model'

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getDoctores: RequestHandler = async (req, res) => {
  try {
    const doctores = await Doctor.findAll()

      res.status(200).json({
        message: 'Operación exitosa',
        data: doctores
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener los doctores',
      error: err.message
    })
  }
}

export const getDoctorById: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor) {
      res.status(200).json({
        message: 'Doctor encontrado',
        data: doctor
      })
    } else {
      res.status(404).json({
        message: 'Doctor no encontrado'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener los doctores',
      error: error.message
    })
  }
}

export const createDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body)

    res.status(201).json({
      message: 'Doctor creado!',
      data: doctor
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'No se pudo crear el doctor',
      error: err.stack
    })
  }
}

export const updateDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor){
      await Doctor.update(req.body, {
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor actualizado'
      })
    } else {
      res.status(404).json({
        message: 'Doctor no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al modificar el doctor',
      error: error.message
    })
  }
}

export const deleteDoctor: RequestHandler = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id)

    if(doctor){
      await Doctor.destroy({
        where: {
          id_profesional: req.params.id
        }
      })
      res.status(200).json({
        message: 'Doctor eliminado'
      })
    } else {
      res.status(404).json({
        message: 'Doctor no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al eliminar el doctor',
      error: error.message
    })
  }
}
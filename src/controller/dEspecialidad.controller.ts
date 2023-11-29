import { RequestHandler } from 'express';
import { DoctorEspecialidad } from '../models/dEspecialidad.model';

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getDocEsp: RequestHandler = async (req, res) => {
  try {
    const dEsp = await DoctorEspecialidad.findAll()

    res.status(200).json({
      message: 'Operación exitosa',
      data: dEsp
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener especialidad_doctor',
      error: err.message
    })
  }
}

export const getOneDocEsp: RequestHandler = async (req, res) => {
  try {
    const { cedula_profesional, id_especialidad } = req.query

    const dEsp = await DoctorEspecialidad.findOne({
      where: {
        cedula_profesional,
        id_especialidad
      }
    })

    if (dEsp){
      res.status(200).json({
        message: 'doctor_especialidad encontrado',
        data: dEsp
      })
    } else {
      res.status(404).json({
        message: 'doctor_especialidad no encontrado'
      })
    }

  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener doctor_especialidad',
      error: error.message
    })
  }
}

export const createDocEsp: RequestHandler = async (req, res) => {
  try {
    const dEsp = await DoctorEspecialidad.create(req.body)

    res.status(201).json({
      message: 'doctor_especialidad creado!',
      data: dEsp
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'No se pudo crear doctor_especialidad',
      error: err.message
    })
  }
}

export const updateDocEsp: RequestHandler = async (req, res) => {
  try {
    const { cedula_profesional, id_especialidad } = req.query

    const dEsp = await DoctorEspecialidad.findOne({
      where: {
        cedula_profesional,
        id_especialidad
    }
    })

    if (dEsp){
      await DoctorEspecialidad.update(req.body, {
        where: {
          cedula_profesional,
          id_especialidad
      }
    })
    res.status(200).json({
      message: 'doctor_especialidad actualizado'
    })
    } else {
      res.status(404).json({
        message: 'doctor_especialidad no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al modificar la cita',
      error: error.message
    })
  }
}

export const deleteDocEsp: RequestHandler = async (req, res) => {
  try {
    const { cedula_profesional, id_especialidad } = req.query

    const dEsp = await DoctorEspecialidad.findOne({
      where: {
        cedula_profesional,
        id_especialidad
    }
    })

    if (dEsp){
      await DoctorEspecialidad.destroy({
        where: {
          cedula_profesional,
          id_especialidad
      }
      })
      res.status(200).json({
        message: 'doctor_especialidad eliminado'
      })
    } else {
      res.status(404).json({
        message: 'doctor_especialidad no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al eliminar la doctor_especialidad',
      error: error.message
    })
  }
}
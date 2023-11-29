import { RequestHandler } from 'express'
import { Especialidad } from '../models/especialidad.model'

export const getEspecialidades: RequestHandler = async (req, res) => {
  try {
    const especialidades = await Especialidad.findAll()

      res.status(200).json({
        message: 'Operación exitosa',
        data: especialidades
      })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener las especialidades',
      error: err.message
    })
  }
}

export const getEspecialidadById: RequestHandler = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id)

    if(especialidad) {
      res.status(200).json({
        message: 'Especialidad encontrada',
        data: especialidad
      })
    } else {
      res.status(404).json({
        message: 'Especialidad no encontrada'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener la especialidad',
      error: error.message
    })
  }
}

export const createEspecialidad: RequestHandler = async (req, res) => {
  try {
    const especialidad = await Especialidad.create(req.body)

    res.status(201).json({
      message: 'Especialidad creada!',
      data: especialidad
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'No se pudo crear la especialidad',
      error: err.stack
    })
  }
}

export const updateEspecialidad: RequestHandler = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id)

    if(especialidad){
      await Especialidad.update(req.body, {
        where: {
          id_especialidad: req.params.id
        }
      })
      res.status(200).json({
        message: 'Especialidad actualizada'
      })
    } else {
      res.status(404).json({
        message: 'Especialidad no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al modificar la especialidad',
      error: error.message
    })
  }
}

export const deleteEspecialidad: RequestHandler = async (req, res) => {
  try {
    const especialidad = await Especialidad.findByPk(req.params.id)

    if(especialidad){
      await Especialidad.destroy({
        where: {
          id_especialidad: req.params.id
        }
      })
      res.status(200).json({
        message: 'Especialidad eliminada'
      })
    } else {
      res.status(404).json({
        message: 'Especialidad no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al eliminar la especialidad',
      error: error.message
    })
  }
}
import { RequestHandler } from 'express';
import { Consultorio } from '../models/consultorio.model';

//RequestHandler trae los tipos, no se debe especificar tipos en req, y res
export const getConsultorios: RequestHandler = async (req, res) => {
  try {
    const consultorio = await Consultorio.findAll()

    res.status(200).json({
      message: 'Operación exitosa',
      data: consultorio
    })
  } catch (error) {
    const err = error as Error
    res.status(500).json({
      message: 'Error al obtener los consultorios',
      error: err.message
    })
  }
}

export const getConsultorioById: RequestHandler = async (req, res) => {
  try {
    const { id_consultorio } = req.params

    const consultorio = await Consultorio.findOne({
      where: {
        id_consultorio
      }
    })

    if (consultorio){
      res.status(200).json({
        message: 'consultorio encontrado',
        data: consultorio
      })
    } else {
      res.status(404).json({
        message: 'consultorio no encontrado'
      })
    }

  } catch (error:any) {
    res.status(500).json({
      message: 'Error al obtener el consultorio',
      error: error.message
    })
  }
}

export const createConsultorio: RequestHandler = async (req, res) => {
  try {
    console.log(req.body);
    const consultorio = await Consultorio.create(req.body)

    res.status(201).json({
      message: 'Consultorio creado!',
      data: consultorio
    })
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      message: 'No se pudo crear el consultorio',
      error: err.message
    })
  }
}

export const updateConsultorio: RequestHandler = async (req, res) => {
  try {
    const { id_consultorio } = req.query

    const consultorio = await Consultorio.findOne({
      where: {
        id_consultorio
      }
    })

    if (consultorio){
      await Consultorio.update(req.body, {
        where: {
          id_consultorio
      }
    })
    res.status(200).json({
      message: 'consultorio actualizado'
    })
    } else {
      res.status(404).json({
        message: 'consultorio no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al modificar el consultorio',
      error: error.message
    })
  }
}

export const deleteConsultorio: RequestHandler = async (req, res) => {
  try {
    const { id_consultorio } = req.params

    const consultorio = await Consultorio.findOne({
      where: {
        id_consultorio
    }
    })

    if (consultorio){
      await Consultorio.destroy({
        where: {
          id_consultorio
      }
      })
      res.status(200).json({
        message: 'consultorio eliminado'
      })
    } else {
      res.status(404).json({
        message: 'consultorio no existe'
      })
    }
  } catch (error:any) {
    res.status(500).json({
      message: 'Error al eliminar el consultorio',
      error: error.message
    })
  }
}
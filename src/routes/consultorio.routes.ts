import { Router } from "express";
import { createConsultorio, deleteConsultorio, getConsultorioById, getConsultorios, updateConsultorio } from "../controller/consultorio.controller";

const router = Router();

router.get('/', getConsultorios)
router.get('/:id_consultorio', getConsultorioById)
router.post('/', createConsultorio)
router.put('/', updateConsultorio)
router.delete('/:id_consultorio', deleteConsultorio)

export default router;
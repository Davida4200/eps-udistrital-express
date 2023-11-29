import { Router } from "express";
import { createEspecialidad, deleteEspecialidad, getEspecialidadById, getEspecialidades, updateEspecialidad } from "../controller/especialidad.controller";

const router = Router();

router.get('/', getEspecialidades);
router.get('/:id', getEspecialidadById);
router.post('/', createEspecialidad);
router.put('/:id', updateEspecialidad);
router.delete('/:id', deleteEspecialidad)

export default router;
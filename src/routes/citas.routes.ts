import { Router } from "express";
import { createCita, deleteCita, getCitaByDoctor, getCitaByPaciente, getCitas, getOneCita, updateCita } from "../controller/citas.controller";

const router = Router();

router.get('/', getCitas)
router.get('/one-cita', getOneCita)
router.get('/by-paciente', getCitaByPaciente)
router.get('/by-doctor', getCitaByDoctor)
router.post('/', createCita)
router.put('/', updateCita)
router.delete('/', deleteCita)

export default router;
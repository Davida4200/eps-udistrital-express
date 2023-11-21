import { Router } from "express";
import { createCita, deleteCita, getCitas, getOneCita, updateCita } from "../controller/citas.controller";

const router = Router();

router.get('/', getCitas)
router.get('/one-cita', getOneCita)
router.post('/', createCita)
router.put('/', updateCita)
router.delete('/', deleteCita)

export default router;
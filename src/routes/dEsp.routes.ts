import { Router } from "express";
import { createDocEsp, deleteDocEsp, getDocEsp, getOneDocEsp, updateDocEsp } from "../controller/dEspecialidad.controller";



const router = Router();

router.get('/', getDocEsp)
router.get('/:id', getOneDocEsp)
router.post('/', createDocEsp)
router.put('/:id', updateDocEsp)
router.delete('/:id', deleteDocEsp)

export default router;
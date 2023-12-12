import { Router } from "express";
import { createDocEsp, deleteDocEsp, getDocEsp, getOneDocEsp, updateDocEsp } from "../controller/dEspecialidad.controller";



const router = Router();

router.get('/', getDocEsp)
router.get('/get-one', getOneDocEsp)
router.post('/', createDocEsp)
router.put('/', updateDocEsp)
router.delete('/', deleteDocEsp)

export default router;
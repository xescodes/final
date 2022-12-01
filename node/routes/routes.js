import express from 'express'
import { createCita, deleteCita, getAllCitas, getCita, updateCita } from '../controllers/CitaController.js'
const router = express.Router()

router.get('/', getAllCitas)
router.get('/:id', getCita)
router.post('/', createCita)
router.put('/:id', updateCita)
router.delete('/:id', deleteCita)

export default router

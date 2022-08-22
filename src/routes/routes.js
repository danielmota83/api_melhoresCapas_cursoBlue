import express  from 'express';
import capasController from '../controllers/capas.controllers.js';
const router = express.Router();

import {
    validId,
    validObjectBody,
  } from '../middlewares/capas.middleware.js';

router.get('/all-capas', capasController.CapaLista);
router.get('/one-capa/:id', validId, capasController.capaById);
router.post('/create-capa', validObjectBody, capasController.createCapa);
router.put('/update-capa/:id', validId, validObjectBody, capasController.updateCapaById);
router.delete('/delete-capa/:id', validId, capasController.deleteCapaById);


export default router;


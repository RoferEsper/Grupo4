const express = require('express');
const router = express.Router();
const inscripciones = require('../controllers/inscripciones');

router.get('/inscripciones', inscripciones.getInscripciones);
router.post('/crear/:id', inscripciones.createInscripcion);
router.delete('/eliminar/:id', inscripciones.deleteInscripcion);





router.get('/estudiantever/:id', inscripciones.getCursosPorEstudiante);




module.exports = router;

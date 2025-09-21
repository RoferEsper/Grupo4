
const express = require('express');
const router = express.Router();
const estudiantes = require('../controllers/estudiantes');


router.get('/estudiantes', estudiantes.getEstudiantes);            
router.get('/estudiantes/:id', estudiantes.getEstudianteById);     
router.post('/crear', estudiantes.createEstudiante);      


router.put('/editar/:id', estudiantes.updateEstudiante); 
router.get('/editar/:id', estudiantes.getEstudianteById);    


router.delete('/eliminar/:id', estudiantes.deleteEstudiante);    

module.exports = router;

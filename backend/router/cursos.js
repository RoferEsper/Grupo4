

const express = require('express');
const router = express.Router();
const cursos = require('../controllers/cursos'); 

router.get('/', cursos.getCursos);            
router.get('/ver/:id', cursos.getCursoById);     
router.post('/crear', cursos.createCurso);   


router.get('/editar/:id', cursos.getCursoById);
router.put('/editar/:id', cursos.updateCurso);




 




router.delete('/eliminar/:id', cursos.deleteCurso);   



module.exports = router;



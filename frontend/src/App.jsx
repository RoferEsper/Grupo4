import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { 
  HOME, CURSOSPAGES, CURSOSPAGE_CREAR, CURSOSPAGE_EDITAR, CURSOSPAGES_VER,
  ESTUDIANTESPAGES, ESTUDIANTESPAGE_VER, ESTUDIANTESPAGE_CREAR, ESTUDIANTESPAGE_EDITAR,
  INSCRIPCIONESPAGE 
} from './Routers/router';

// Home
import Home from './Pages/Home';

// Cursos
import CursosPages from './Pages/CursosPages';
import CursosPages_crear from './Pages/CursosPages_crear';
import CursosPages_editar from './Pages/CursosPages_editar';
import CursosPages_ver from './Pages/CursosPages_ver';

// Estudiantes
import EstudiantesPages from './Pages/EstudiantesPages';
import EstudiantesPages_Crear from './Pages/EstudiantesPages_Crear';
import EstudiantesPages_Editar from './Pages/EstudiantesPages_Editar';
import EstudiantesPages_Ver from './Pages/EstudiantesPages_Ver';

// Inscripciones
import InscripcionesPages_crear from './Pages/InscripcionesPages_crear';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path={HOME} element={<Home />} />

        {/* Cursos */}
        <Route path={CURSOSPAGES} element={<CursosPages />} />
        <Route path={CURSOSPAGE_CREAR} element={<CursosPages_crear />} />
        <Route path={`${CURSOSPAGE_EDITAR}/:id`} element={<CursosPages_editar />} />
        <Route path={CURSOSPAGES_VER} element={<CursosPages_ver />} />       
      
        
            {/* Lista todos */}
        <Route path={`${CURSOSPAGES_VER}/:id`} element={<CursosPages_ver />} />  {/* Detalle */}

        {/* Estudiantes */}
        <Route path={ESTUDIANTESPAGES} element={<EstudiantesPages />} />
        <Route path={ESTUDIANTESPAGE_CREAR} element={<EstudiantesPages_Crear />} />
        <Route path={`${ESTUDIANTESPAGE_EDITAR}/:id`} element={<EstudiantesPages_Editar />} />
        <Route path={ESTUDIANTESPAGE_VER} element={<EstudiantesPages_Ver />} />           {/* Lista todos */}
        <Route path={`${ESTUDIANTESPAGE_VER}/:id`} element={<EstudiantesPages_Ver />} />  {/* Detalle */}

        {/* Inscripciones */}
        <Route path={`${INSCRIPCIONESPAGE}/:id`} element={<InscripcionesPages_crear />} />
        <Route path={INSCRIPCIONESPAGE} element={<InscripcionesPages_crear />} /> 
      </Routes>
    </Router>
  );
};

export default App;

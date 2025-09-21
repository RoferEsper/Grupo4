const { connection } = require('../config/db');
exports.getCursos = (req, res) => {
  connection.query('SELECT * FROM cursos', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getCursoById = (req, res) => {
  connection.query(
    'SELECT * FROM cursos WHERE id_curso = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result[0]);
    }
  );
};

exports.createCurso = (req, res) => {
  const { nombre, descripcion } = req.body;
  connection.query(
    'INSERT INTO cursos (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Curso creado', id: result.insertId });
    }
  );
};

exports.updateCurso = (req, res) => {
  const { nombre, descripcion } = req.body;
  connection.query(
    'UPDATE cursos SET nombre = ?, descripcion = ? WHERE id_curso = ?',
    [nombre, descripcion, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Curso actualizado' });
    }
  );
};





exports.deleteCurso = (req, res) => {
  const { id } = req.params;


  connection.query(
    'DELETE FROM inscripciones WHERE id_curso = ?',
    [id],
    (err) => {
      if (err) return res.status(500).send(err);

     
      connection.query(
        'DELETE FROM cursos WHERE id_curso = ?',
        [id],
        (err) => {
          if (err) return res.status(500).send(err);
          res.json({ message: 'Curso y todas sus inscripciones eliminadas' });
        }
      );
    }
  );
};

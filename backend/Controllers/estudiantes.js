const { connection } = require('../config/db');

exports.getEstudiantes = (req, res) => {
  connection.query('SELECT * FROM estudiantes', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getEstudianteById = (req, res) => {
  connection.query(
    'SELECT * FROM estudiantes WHERE id_estudiante = ?',
    [req.params.id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result[0]);
    }
  );
};

exports.createEstudiante = (req, res) => {
  const { nombre, email } = req.body;
  connection.query(
    'INSERT INTO estudiantes (nombre, email) VALUES (?, ?)',
    [nombre, email],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Estudiante creado', id: result.insertId });
    }
  );
};

exports.updateEstudiante = (req, res) => {
  const { nombre, email } = req.body;
  connection.query(
    'UPDATE estudiantes SET nombre = ?, email = ? WHERE id_estudiante = ?',
    [nombre, email, req.params.id],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Estudiante actualizado' });
    }
  );
};


exports.deleteEstudiante = (req, res) => {
  const { id } = req.params;

  // Primero eliminar inscripciones del estudiante
  connection.query(
    'DELETE FROM inscripciones WHERE id_estudiante = ?',
    [id],
    (err) => {
      if (err) return res.status(500).send(err);

      // Luego eliminar el estudiante
      connection.query(
        'DELETE FROM estudiantes WHERE id_estudiante = ?',
        [id],
        (err) => {
          if (err) return res.status(500).send(err);
          res.json({ message: 'Estudiante y sus inscripciones eliminados' });
        }
      );
    }
  );
};


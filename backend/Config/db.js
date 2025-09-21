const mysql = require ('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'admin123',
    database: 'inst_educativo'

});
connection.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conectado a la base de datos');
});


module.exports = {connection};



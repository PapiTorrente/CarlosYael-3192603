SET NAMES 'latin1';
DROP DATABASE IF EXISTS registros;
CREATE DATABASE IF NOT EXISTS registros DEFAULT CHARACTER SET utf8;
USE registros;

CREATE TABLE usuarios(
    id_usr      INTEGER NOT NULL AUTO_INCREMENT,
    nombre      VARCHAR(20) NOT NULL,
    ap_paterno  VARCHAR(20) NOT NULL,
    ap_materno  VARCHAR(20) NOT NULL,
    edad        INTEGER(3)  NOT NULL,
    oficio      VARCHAR(20) NOT NULL,
    correo      VARCHAR(40) NOT NULL,
    telefono    INTEGER(10) NOT NULL,
    direccion   VARCHAR(50) NOT NULL,

PRIMARY KEY(id_usr)
)DEFAULT CHARACTER SET utf8;
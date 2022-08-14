--
-- Base de datos: `tasks_api`
--
CREATE DATABASE tasks_api;
USE tasks_api;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`.
--
CREATE TABLE tasks (
  id INT(10) PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--
-- Inserción de datos de prueba para la tabla `tasks`.
--
INSERT INTO tasks (title, description) VALUES ('Tarea 1', 'Descripción de la tarea 1');


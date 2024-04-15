-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 15-04-2024 a las 23:13:32
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoIntegrador`
--
CREATE DATABASE IF NOT EXISTS `proyectoIntegrador` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `proyectoIntegrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `texto` varchar(3000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `texto`, `createdAt`, `updatedAt`, `deletedAt`, `usuario_id`, `producto_id`) VALUES
(1, '¡Este auto es asombroso!', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 3, 18),
(2, 'Increíble vehículo, estoy impresionado.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 19),
(3, 'Realmente me gusta este modelo.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 20),
(4, 'Me encanta este modelo.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 21),
(5, 'Qué buena elección, este auto es genial.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 22),
(6, 'Excelente auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 23),
(7, 'Gran auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 24),
(8, 'Es una maravilla, me encanta.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 25),
(9, 'Una belleza de auto.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 26),
(10, 'El diseño de este modelo es impresionante.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 27),
(11, 'Me gusta mucho este auto.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 18),
(12, '¡Qué gran compra!', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 3, 19),
(13, '¡Este auto es asombroso!', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 20),
(14, 'Increíble vehículo, estoy impresionado.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 21),
(15, 'Realmente me gusta este modelo.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 22),
(16, 'El mejor auto que he visto en mucho tiempo.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 23),
(17, 'Un auto muy versátil.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 3, 24),
(18, 'Este auto cumple con todas mis expectativas.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 25),
(19, 'Un auto muy versátil.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 26),
(20, 'Este auto cumple con todas mis expectativas.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 27),
(21, '¡Este auto es asombroso!', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 18),
(22, 'Increíble vehículo, estoy impresionado.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 3, 19),
(23, 'Realmente me gusta este modelo.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 4, 20),
(24, 'Qué buena elección, este auto es genial.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 21),
(25, 'Qué buena elección, este auto es genial.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 22),
(26, 'Excelente auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 6, 23),
(27, 'Gran auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 24),
(28, 'Excelente auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 7, 25),
(29, 'Gran auto, definitivamente lo compraría.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 3, 26),
(30, 'Es una maravilla, me encanta.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `foto`, `producto`, `descripcion`, `createdAt`, `updatedAt`, `deletedAt`, `usuario_id`) VALUES
(18, 'ruta/a/auto1.jpg', 'Toyota Corolla', 'El Toyota Corolla es un automóvil del segmento C producido por el fabricante japonés Toyota desde el año 1966.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3),
(19, 'ruta/a/auto2.jpg', 'Volkswagen Golf', 'El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán Volkswagen desde 1974.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(20, 'ruta/a/auto3.jpg', 'Ford Mustang', 'El Ford Mustang es un automóvil deportivo producido por el fabricante estadounidense Ford desde 1964.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 5),
(21, 'ruta/a/auto4.jpg', 'Honda Civic', 'El Honda Civic es un automóvil del segmento C producido por el fabricante japonés Honda desde 1972.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 6),
(22, 'ruta/a/auto5.jpg', 'BMW Serie 3', 'El BMW Serie 3 es un automóvil del segmento D producido por el fabricante alemán BMW desde 1975.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3),
(23, 'ruta/a/auto6.jpg', 'Chevrolet Camaro', 'El Chevrolet Camaro es un automóvil deportivo producido por el fabricante estadounidense Chevrolet desde 1966.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(24, 'ruta/a/auto7.jpg', 'Mercedes-Benz Clase C', 'El Mercedes-Benz Clase C es un automóvil del segmento D producido por el fabricante alemán Mercedes-Benz desde 1993.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 5),
(25, 'ruta/a/auto8.jpg', 'Audi A4', 'El Audi A4 es un automóvil del segmento D producido por el fabricante alemán Audi desde 1994.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 6),
(26, 'ruta/a/auto9.jpg', 'Nissan Altima', 'El Nissan Altima es un automóvil del segmento D producido por el fabricante japonés Nissan desde 1992.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(27, 'ruta/a/auto10.jpg', 'Mazda CX-5', 'El Mazda CX-5 es un automóvil del segmento C producido por el fabricante japonés Mazda desde 2012.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `DNI` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `password`, `fecha`, `DNI`, `foto`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(3, 'usuario1@example.com', 'contraseña1', '1990-01-01', 12345678, 'ruta/a/foto1.jpg', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(4, 'usuario2@example.com', 'contraseña2', '1991-02-02', 23456789, 'ruta/a/foto2.jpg', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(5, 'usuario3@example.com', 'contraseña3', '1992-03-03', 34567890, 'ruta/a/foto3.jpg', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(6, 'usuario4@example.com', 'contraseña4', '1993-04-04', 45678901, 'ruta/a/foto4.jpg', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(7, 'usuario6@example.com', 'contraseña6', '1995-06-06', 67890123, 'ruta/a/foto6.jpg', '2024-04-15 21:21:27', '2024-04-15 21:21:27', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `products` (`id`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

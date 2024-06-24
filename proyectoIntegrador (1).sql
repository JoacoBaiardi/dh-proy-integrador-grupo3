-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 24-06-2024 a las 17:19:08
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comments`
--

CREATE TABLE `comments` (
  `id` int(10) UNSIGNED NOT NULL,
  `texto` varchar(3000) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `producto_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comments`
--

INSERT INTO `comments` (`id`, `texto`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`, `producto_id`) VALUES
(1, '¡Este auto es asombroso!', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 29, 18),
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
(30, 'Es una maravilla, me encanta.', '2024-04-15 21:27:51', '2024-04-15 21:27:51', NULL, 5, 27),
(31, 'Me encanto!', '2024-06-24 15:20:50', '2024-06-24 15:20:50', NULL, 35, 34),
(32, 'Fascinante', '2024-06-24 15:25:25', '2024-06-24 15:25:25', NULL, 35, 31),
(33, 'Excelente Auto', '2024-06-24 15:46:48', '2024-06-24 15:46:48', NULL, 35, 34),
(34, 'Fantastico este auto', '2024-06-24 16:13:07', '2024-06-24 16:13:07', NULL, 29, 34),
(35, 'Tremendo coche', '2024-06-24 16:13:25', '2024-06-24 16:13:25', NULL, 29, 34),
(36, 'Que pedazo de nave', '2024-06-24 17:14:37', '2024-06-24 17:14:37', NULL, 36, 32);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `producto` varchar(100) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `foto`, `producto`, `descripcion`, `created_at`, `updated_at`, `deleted_at`, `usuario_id`) VALUES
(18, 'auto1.jpg', 'Toyota Corolla V3', 'El Toyota Corolla es un automóvil del segmento C producido por el fabricante japonés Toyota desde el año 1966.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3),
(19, 'auto2.jpg', 'Volkswagen Golf', 'El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán Volkswagen desde 1974.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(20, 'auto3.jpg', 'Ford Mustang', 'El Ford Mustang es un automóvil deportivo producido por el fabricante estadounidense Ford desde 1964.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 5),
(21, 'auto4.jpg', 'Honda Civic', 'El Honda Civic es un automóvil del segmento C producido por el fabricante japonés Honda desde 1972.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 6),
(22, 'auto5.jpg', 'BMW Serie 3', 'El BMW Serie 3 es un automóvil del segmento D producido por el fabricante alemán BMW desde 1975.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3),
(23, 'auto6.jpg', 'Chevrolet Camaro', 'El Chevrolet Camaro es un automóvil deportivo producido por el fabricante estadounidense Chevrolet desde 1966.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(24, 'auto7.jpg', 'Mercedes-Benz Clase C', 'El Mercedes-Benz Clase C es un automóvil del segmento D producido por el fabricante alemán Mercedes-Benz desde 1993.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 5),
(25, 'auto8.jpg', 'Audi A4', 'El Audi A4 es un automóvil del segmento D producido por el fabricante alemán Audi desde 1994.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 6),
(26, 'auto9.jpg', 'Nissan Altima', 'El Nissan Altima es un automóvil del segmento D producido por el fabricante japonés Nissan desde 1992.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 4),
(27, 'auto10.jpg', 'Mazda CX-5', 'El Mazda CX-5 es un automóvil del segmento C producido por el fabricante japonés Mazda desde 2012.', '2024-04-15 21:17:40', '2024-04-15 21:17:40', NULL, 3),
(29, 'auto11.jpg', 'Audi Q4 Sportback', 'El Audi Q3 Sportback combina la estética y el atractivo emocional de un coupé con la potencia y funcionalidad de un SUV. Una amplia gama de opciones de infoentretenimiento y conectividad, así como un amplio equipamiento de serie, garantizan una diversión al volante prácticamente ilimitada.', '2024-06-23 16:10:01', '2024-06-24 01:12:34', NULL, 29),
(31, 'auto12.jpg', 'Porsche 911 GT3', 'Cualquiera que sueñe con un Porsche suele imaginarlo a él: el 911 lleva 60 años siendo sinónimo de un deportivo apasionante, potente y apto para el uso diario. Siéntese al volante del nuevo 911 y forme parte de una comunidad única.', '2024-06-23 17:49:12', '2024-06-23 17:49:12', NULL, 28),
(32, 'auto13.jpg', 'Aston Martin DB5', 'El Aston Martin DBS V12 es un modelo de automóvil deportivo Gran Turismo de dos puertas de elevadas prestaciones con motor delantero montado longitudinalmente y tracción trasera, producido por el fabricante británico Aston Martin. La marca ya había utilizado la denominación DBS anteriormente para su coupé en los años 1967-72.', '2024-06-23 18:06:42', '2024-06-23 18:06:42', NULL, 33),
(33, 'auto14.jpg', 'Mercedes Benz EQS', 'El Mercedes-Benz EQS es el equivalente al Clase S pero en coche eléctrico. En otras palabras, estamos ante la máxima expresión de lujo y tecnología de la firma de la estrella pero en clave eléctrica. Si te interesa puedes echar un vistazo a toda la información sobre el Mercedes EQS eléctrico en el sitio web de Mercedes.', '2024-06-23 19:54:30', '2024-06-24 17:02:22', NULL, 29),
(34, 'auto15.jpg', 'Audi Q5', 'El nuevo Audi Q5 es la suma perfecta de estilo, versatilidad y deportividad. Con un nuevo lenguaje de diseño que cautiva a primera vista, sentirás todo su dinamismo gracias a la tracción integral quattro. Disfrutarás como nunca con las nuevas opciones de infotainment. Y sentirás la potencia de su eficiente motor con sistema Mild hybrid. Sin duda, el nuevo Audi Q5 es mucho más que un SUV.', '2024-06-24 13:28:17', '2024-06-24 14:22:27', NULL, 35);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `email` varchar(100) NOT NULL,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `usuario`, `password`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(3, 'usuario1@example.com', 'usuario1', 'contraseña1', '1990-01-01', 12345678, '', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(4, 'usuario2@example.com', 'usuario2', 'contraseña2', '1991-02-02', 23456789, '', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(5, 'usuario3@example.com', 'usuario3', 'contraseña3', '1992-03-03', 34567890, '', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(6, 'usuario4@example.com', 'usuario4', 'contraseña4', '1993-04-04', 45678901, '', '2024-04-15 21:13:15', '2024-04-15 21:13:15', NULL),
(7, 'usuario6@example.com', 'usuario6', 'contraseña6', '1995-06-06', 67890123, '', '2024-04-15 21:21:27', '2024-04-15 21:21:27', NULL),
(24, 'cruz@cruz.com', 'juancruz', 'cruz', '2024-06-07', 1111111, '', '2024-06-19 23:38:09', '2024-06-19 23:38:09', NULL),
(25, 'joacobaiardi@gmail.com', 'Baiardi', 'vava', '2024-06-22', NULL, '', '2024-06-20 16:14:44', '2024-06-20 16:14:44', NULL),
(26, 'joacobaiardi@outlook.com.ar', 'Baiardi', 'vava', '2024-06-30', 46026462, '', '2024-06-20 16:15:42', '2024-06-20 16:15:42', NULL),
(27, 'aocndjsamnc@gmail.com', 'jojo', 'jojo', '2024-06-14', NULL, '', '2024-06-20 16:38:05', '2024-06-20 16:38:05', NULL),
(28, 'jojo@gmail.com', 'jijolino', '$2a$10$IlMtFvoxJIx0yASkYVfcEuVhJSY0PLW4QPgGsAf8DPoUPP/mlBi52', '2024-06-23', NULL, '', '2024-06-20 22:07:55', '2024-06-24 13:24:16', NULL),
(29, 'jijasos@gmail.com', 'jojo', '$2a$10$jSdMHYSLBvhJWthRg0eiH.gwegaoyhEaLOmU1V9Sk4RKiubHi4Ucq', '2024-06-12', 11588772, '', '2024-06-21 13:03:23', '2024-06-24 02:57:23', NULL),
(30, 'baiardi@baiarda.net', 'Baiardi12', '$2a$10$0mcgtNTNNL.g1JLHPuh84.XTtWeoqyykNf46neMk094Y.wmh76NjO', '2024-06-16', 46026462, '', '2024-06-21 22:10:21', '2024-06-21 22:10:21', NULL),
(31, 'lucianaruggiero1977@gmail.com', 'sassy8', '$2a$10$rGzbSQymdqbogL09fGiWCu1JIJZFTBd5mYqKb2FEQFSA3i4rN9TQu', '1977-12-31', 26363484, '', '2024-06-21 22:47:59', '2024-06-21 22:47:59', NULL),
(32, 'baiard@nesi.net', 'baiard', '$2a$10$My70sMYrTFD87nyYcp7UOuJ2i6TgiClvJawGg4cDFpoZ3bWoKovFa', '2004-09-06', 11234567, '', '2024-06-22 14:15:20', '2024-06-22 14:15:20', NULL),
(33, 'baiard@outlook.net', 'fandeautos', '$2a$10$e.1wwxdP62.I0LbY8TB7iOssIN5DnIk8cJFDOUujKBD5jlAOb7oNu', '2004-09-06', NULL, '', '2024-06-23 18:01:23', '2024-06-23 18:01:23', NULL),
(34, 'garci@garci.com', 'Garci', '$2a$10$COhGFTZ9Mp98pkouMEe5Y.JY.h68NuXoMm4gs111Nps.NvjsmO/bW', '2024-06-30', NULL, '', '2024-06-24 13:26:27', '2024-06-24 13:26:27', NULL),
(35, 'garci@garcia.com', 'garcia', '$2a$10$YtgazdWoAx2Ut6Y3fG2reer01nB91koliRN7zp2hIftgfyNMXCO2K', '2024-06-12', NULL, '', '2024-06-24 13:27:09', '2024-06-24 14:19:15', NULL),
(36, 'joaquito@gmail.com', 'Joaco', '$2a$10$2kX4hc7.Qz43NgK1MgoN8uD0Vu8IAv27g9dvOT1YEO12gIkrxUYJK', '2024-06-20', 11588994, '', '2024-06-24 17:10:19', '2024-06-24 17:10:19', NULL);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

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

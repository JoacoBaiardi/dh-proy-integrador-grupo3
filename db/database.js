const lista = {
    usuarios : [
        {
          id: 1,
          email: "usuario1@example.com",
          usuario: "usuario1",
          password: "contraseña1",
          fechaNacimiento: "1990-01-01",
          numeroDocumento: "12345678A",
          fotoPerfil: "default-image.png"
        },
        {
          id: 2,
          email: "usuario2@example.com",
          usuario: "usuario2",
          password: "contraseña2",
          fechaNacimiento: "1991-02-02",
          numeroDocumento: "23456789B",
          fotoPerfil: "ruta/a/foto2.jpg"
        },
        {
          id: 3,
          email: "usuario3@example.com",
          usuario: "usuario3",
          password: "contraseña3",
          fechaNacimiento: "1992-03-03",
          numeroDocumento: "34567890C",
          fotoPerfil: "ruta/a/foto3.jpg"
        },
        {
          id: 4,
          email: "usuario4@example.com",
          usuario: "usuario4",
          password: "contraseña4",
          fechaNacimiento: "1993-04-04",
          numeroDocumento: "45678901",
          fotoPerfil: "ruta/a/foto4.jpg"
        },
        {
          id: 5,
          email: "usuario5@example.com",
          usuario: "usuario5",
          password: "contraseña5",
          fechaNacimiento: "1994-05-05",
          numeroDocumento: "56789012",
          fotoPerfil: "ruta/a/foto5.jpg"
        }
      ],
    
      productos: [
        {
            id: 18,
            nombre: "Toyota Corolla",
            descripcion: "El Toyota Corolla es un automóvil del segmento C producido por el fabricante japonés Toyota desde el año 1966.",
            imagen: "auto1.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario1",
                    textoComentario: "Este auto es asombroso!",
                    imagenPerfil: "ruta/a/imagenPerfil1.jpg"
                },
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "Me gusta mucho este auto.",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                },
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "Este auto es asombroso!.",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                }
            ]
        },
        {
            id: 19,
            nombre: "Volkswagen Golf",
            descripcion: "El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán Volkswagen desde 1974",
            imagen: "auto2.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Increible vehiculo, estoy impresionado.",
                    imagenPerfil: "ruta/a/imagenPerfil2.jpg"
                },
                {
                    nombreUsuario: "Usuario1",
                    textoComentario: "Que gran compra!",
                    imagenPerfil: "ruta/a/imagenPerfil1.jpg"
                },
                {
                    nombreUsuario: "Usuario1",
                    textoComentario: "Increible vehiculo, estoy impresionado.",
                    imagenPerfil: "ruta/a/imagenPerfil1.jpg"
                }
            ]
        },
        {
            id: 26,
            nombre: "Nissan Altima",
            descripcion: "El Nissan Altima es un automóvil del segmento D producido por el fabricante japonés Nissan desde 1992.",
            imagen: "auto9.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Una belleza de auto.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Un auto muy versatil.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                },
                {
                    nombreUsuario: "Usuario1",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfil1.jpg"
                }
            ]
        },
        {
            id: 21,
            nombre: "Honda Civic",
            descripcion: "El Honda Civic es un automóvil del segmento C producido por el fabricante japonés Honda desde 1972.",
            imagen: "auto4.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Me encanta este modelo.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Increible vehiculo estoy impresionado.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                },
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                }
            ]
        },
        {
            id: 22,
            nombre: "BMW Serie 3",
            descripcion: "El BMW Serie 3 es un automóvil del segmento D producido por el fabricante alemán BMW desde 1975.",
            imagen: "auto5.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "Que buena eleccion, este auto es genial",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                },
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Realmente me gusta este modelo.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                }
            ]
        },
        {
            id: 23,
            nombre: "Chevrolet Camaro",
            descripcion: "El Chevrolet Camaro es un automóvil deportivo producido por el fabricante estadounidense Chevrolet desde 1966.",
            imagen: "auto6.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfil2.jpg"
                },
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "El mejor auto que he visto en mucho tiempo.",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                },
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                }
            ]
        },
        {
            id: 24,
            nombre: "Mercedes-Benz Clase C",
            descripcion: "El Mercedes-Benz Clase C es un automóvil del segmento D producido por el fabricante alemán Mercedes-Benz desde 1993.",
            imagen: "auto7.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfi2.jpg"
                },
                {
                    nombreUsuario: "Usuario1",
                    textoComentario: "Un auto muy versatil.",
                    imagenPerfil: "ruta/a/imagenPerfil1.jpg"
                },
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                }
            ]
        },
        {
            id: 25,
            nombre: "Audi A4",
            descripcion: "El Audi A4 es un automóvil del segmento D producido por el fabricante alemán Audi desde 1994.",
            imagen: "auto8.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Es una maravilla, me encanta.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                },
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Este auto cumple con todas mis expectativas.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario5",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "ruta/a/imagenPerfil5.jpg"
                }
            ]
        },
        {
            id: 20,
            nombre: "Ford Mustang",
            descripcion: "El Ford Mustang es un automóvil deportivo producido por el fabricante estadounidense Ford desde 1964.",
            imagen: "auto3.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario3",
                    textoComentario: "Realmente me gusta este modelo.",
                    imagenPerfil: "ruta/a/imagenPerfil3.jpg"
                },
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Este auto es asombroso!.",
                    imagenPerfil: "ruta/a/imagenPerfil2.jpg"
                },
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "ruta/a/imagenPerfil2.jpg"
                }
            ]
        },
        {
            id: 27,
            nombre: "Mazda CX-5",
            descripcion: "El Mazda CX-5 es un automóvil del segmento C producido por el fabricante japonés Mazda desde 2012.",
            imagen: "auto10.jpg",
            comentarios: [
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "El diseno de este modelo es impresionante.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario4",
                    textoComentario: "Este auto cumple con todas mis expectativas.",
                    imagenPerfil: "ruta/a/imagenPerfil4.jpg"
                },
                {
                    nombreUsuario: "Usuario2",
                    textoComentario: "Es una maravilla, me encanta.",
                    imagenPerfil: "ruta/a/imagenPerfil2.jpg"
                }
            ]
              }
                ]
              }
    
    module.exports = lista
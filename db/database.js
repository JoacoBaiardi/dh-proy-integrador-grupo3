const lista = {
    usuarios : [
        {
          id: 1,
          email: "usuario1@example.com",
          usuario: "PichonAdvincula",
          password: "contraseña1",
          fechaNacimiento: "1990-01-01",
          numeroDocumento: "12345678A",
          fotoPerfil: "usuario1.jpg"
        },
        {
          id: 2,
          email: "usuario2@example.com",
          usuario: "usuario2",
          password: "contraseña2",
          fechaNacimiento: "1991-02-02",
          numeroDocumento: "23456789B",
          fotoPerfil: "usuario2.jpg"
        },
        {
          id: 3,
          email: "usuario3@example.com",
          usuario: "usuario3",
          password: "contraseña3",
          fechaNacimiento: "1992-03-03",
          numeroDocumento: "34567890C",
          fotoPerfil: "usuario3.jpg"
        },
        {
          id: 4,
          email: "usuario4@example.com",
          usuario: "usuario4",
          password: "contraseña4",
          fechaNacimiento: "1993-04-04",
          numeroDocumento: "45678901",
          fotoPerfil: "usuario4.png"
        },
        {
          id: 5,
          email: "usuario5@example.com",
          usuario: "usuario5",
          password: "contraseña5",
          fechaNacimiento: "1994-05-05",
          numeroDocumento: "56789012",
          fotoPerfil: "usuario5.jpg"
        }
      ],
    
      productos: [
        {
            id: 0,
            nombre: "Toyota Corolla",
            descripcion: "El Toyota Corolla es un automóvil del segmento C producido por el fabricante japonés Toyota desde el año 1966.",
            imagen: "auto1.jpg",
            comentarios: [
                {
                    nombreUsuario: "PichonAdvincula",
                    textoComentario: "Este auto es asombroso!",
                    imagenPerfil: "../images/users/usuario1.jpg"
                },
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "Me gusta mucho este auto.",
                    imagenPerfil: "../images/users/usuario5.jpg"
                },
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "Este auto es asombroso!.",
                    imagenPerfil: "../images/users/usuario5.jpg"
                }
            ]
        },
        {
            id: 1,
            nombre: "Volkswagen Golf",
            descripcion: "El Volkswagen Golf es un automóvil del segmento C producido por el fabricante alemán Volkswagen desde 1974",
            imagen: "auto2.jpg",
            comentarios: [
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Increible vehiculo, estoy impresionado.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                },
                {
                    nombreUsuario: "PichonAdvincula",
                    textoComentario: "Que gran compra!",
                    imagenPerfil: "../images/users/usuario1.jpg"
                },
                {
                    nombreUsuario: "PichonAdvincula",
                    textoComentario: "Increible vehiculo, estoy impresionado.",
                    imagenPerfil: "../images/users/usuario1.jpg"
                }
            ]
        },
        {
            id: 2,
            nombre: "Nissan Altima",
            descripcion: "El Nissan Altima es un automóvil del segmento D producido por el fabricante japonés Nissan desde 1992.",
            imagen: "auto9.jpg",
            comentarios: [
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Una belleza de auto.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Un auto muy versatil.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                },
                {
                    nombreUsuario: "PichonAdvincula",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario1.jpg"
                }
            ]
        },
        {
            id: 3,
            nombre: "Honda Civic",
            descripcion: "El Honda Civic es un automóvil del segmento C producido por el fabricante japonés Honda desde 1972.",
            imagen: "auto4.jpg",
            comentarios: [
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Me encanta este modelo.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Increible vehiculo estoy impresionado.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                },
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                }
            ]
        },
        {
            id: 4,
            nombre: "BMW Serie 3",
            descripcion: "El BMW Serie 3 es un automóvil del segmento D producido por el fabricante alemán BMW desde 1975.",
            imagen: "auto5.jpg",
            comentarios: [
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "Que buena eleccion, este auto es genial",
                    imagenPerfil: "../images/users/usuario5.jpg"
                },
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Realmente me gusta este modelo.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                }
            ]
        },
        {
            id: 5,
            nombre: "Chevrolet Camaro",
            descripcion: "El Chevrolet Camaro es un automóvil deportivo producido por el fabricante estadounidense Chevrolet desde 1966.",
            imagen: "auto6.jpg",
            comentarios: [
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                },
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "El mejor auto que he visto en mucho tiempo.",
                    imagenPerfil: "../images/users/usuario5.jpg"
                },
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario4.png"
                }
            ]
        },
        {
            id: 6,
            nombre: "Mercedes-Benz Clase C",
            descripcion: "El Mercedes-Benz Clase C es un automóvil del segmento D producido por el fabricante alemán Mercedes-Benz desde 1993.",
            imagen: "auto7.jpg",
            comentarios: [
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                },
                {
                    nombreUsuario: "PichonAdvincula",
                    textoComentario: "Un auto muy versatil.",
                    imagenPerfil: "../images/users/usuario1.jpg"
                },
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "Gran auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario5.jpg"
                }
            ]
        },
        {
            id: 7,
            nombre: "Audi A4",
            descripcion: "El Audi A4 es un automóvil del segmento D producido por el fabricante alemán Audi desde 1994.",
            imagen: "auto8.jpg",
            comentarios: [
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Es una maravilla, me encanta.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                },
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Este auto cumple con todas mis expectativas.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "BestiaMerentiel",
                    textoComentario: "Excelente auto, definitivamente lo compraria.",
                    imagenPerfil: "../images/users/usuario5.jpg"
                }
            ]
        },
        {
            id: 8,
            nombre: "Ford Mustang",
            descripcion: "El Ford Mustang es un automóvil deportivo producido por el fabricante estadounidense Ford desde 1964.",
            imagen: "auto3.jpg",
            comentarios: [
                {
                    nombreUsuario: "EdiCava",
                    textoComentario: "Realmente me gusta este modelo.",
                    imagenPerfil: "../images/users/usuario3.jpg"
                },
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Este auto es asombroso!.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                },
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Que buena eleccion, este auto es genial.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                }
            ]
        },
        {
            id: 9,
            nombre: "Mazda CX-5",
            descripcion: "El Mazda CX-5 es un automóvil del segmento C producido por el fabricante japonés Mazda desde 2012.",
            imagen: "auto10.jpg",
            comentarios: [
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "El diseno de este modelo es impresionante.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "CrisLema",
                    textoComentario: "Este auto cumple con todas mis expectativas.",
                    imagenPerfil: "../images/users/usuario4.png"
                },
                {
                    nombreUsuario: "JavitoGarcia",
                    textoComentario: "Es una maravilla, me encanta.",
                    imagenPerfil: "../images/users/usuario2.jpg"
                }
            ]
              }
                ]
              }
    
    module.exports = lista
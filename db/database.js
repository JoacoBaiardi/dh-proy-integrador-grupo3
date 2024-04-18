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
    }
  ],

  productos: [
    {
        id: 1,
        nombre: "Toyota Corolla",
        precio: 25000,
        descripcion: "El Toyota Corolla es un sedán compacto que ofrece confiabilidad y eficiencia energética.",
        imagen: "ruta/a/toyota_corolla.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario1",
                textoComentario: "Este auto es muy confiable.",
                imagenPerfil: "ruta/a/imagenPerfil1.jpg"
            },
            {
                nombreUsuario: "Usuario2",
                textoComentario: "Me gusta su diseño exterior.",
                imagenPerfil: "ruta/a/imagenPerfil2.jpg"
            }
        ]
    },
    {
        id: 2,
        nombre: "Honda Civic",
        precio: 27000,
        descripcion: "El Honda Civic es un auto compacto deportivo con una larga historia de calidad y rendimiento.",
        imagen: "ruta/a/honda_civic.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario3",
                textoComentario: "Su manejo es suave y ágil.",
                imagenPerfil: "ruta/a/imagenPerfil3.jpg"
            },
            {
                nombreUsuario: "Usuario4",
                textoComentario: "Me impresiona su economía de combustible.",
                imagenPerfil: "ruta/a/imagenPerfil4.jpg"
            }
        ]
    },
    {
        id: 3,
        nombre: "Ford Mustang",
        precio: 40000,
        descripcion: "El Ford Mustang es un icónico muscle car americano conocido por su potencia y estilo distintivo.",
        imagen: "ruta/a/ford_mustang.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario5",
                textoComentario: "Es un auto muy potente.",
                imagenPerfil: "ruta/a/imagenPerfil5.jpg"
            },
            {
                nombreUsuario: "Usuario6",
                textoComentario: "Me encanta su rugido del motor.",
                imagenPerfil: "ruta/a/imagenPerfil6.jpg"
            }
        ]
    },
    {
        id: 4,
        nombre: "BMW Serie 3",
        precio: 45000,
        descripcion: "El BMW Serie 3 es un sedán deportivo de lujo con una combinación perfecta de rendimiento y comodidad.",
        imagen: "ruta/a/bmw_serie_3.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario7",
                textoComentario: "Su interior es realmente lujoso.",
                imagenPerfil: "ruta/a/imagenPerfil7.jpg"
            },
            {
                nombreUsuario: "Usuario8",
                textoComentario: "La calidad de conducción es incomparable.",
                imagenPerfil: "ruta/a/imagenPerfil8.jpg"
            }
        ]
    },
    {
        id: 5,
        nombre: "Mercedes-Benz Clase C",
        precio: 48000,
        descripcion: "El Mercedes-Benz Clase C es un sedán de lujo con un equilibrio impresionante entre elegancia y rendimiento.",
        imagen: "ruta/a/mercedes_clase_c.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario9",
                textoComentario: "Es un auto que llama la atención.",
                imagenPerfil: "ruta/a/imagenPerfil9.jpg"
            },
            {
                nombreUsuario: "Usuario10",
                textoComentario: "La tecnología incorporada es de primera clase.",
                imagenPerfil: "ruta/a/imagenPerfil10.jpg"
            }
        ]
    },
    {
        id: 6,
        nombre: "Chevrolet Camaro",
        precio: 42000,
        descripcion: "El Chevrolet Camaro es otro muscle car estadounidense famoso por su diseño agresivo y su potencia.",
        imagen: "ruta/a/chevrolet_camaro.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario11",
                textoComentario: "Es un sueño hecho realidad conducir este auto.",
                imagenPerfil: "ruta/a/imagenPerfil11.jpg"
            },
            {
                nombreUsuario: "Usuario12",
                textoComentario: "Nunca me canso de admirar su carrocería.",
                imagenPerfil: "ruta/a/imagenPerfil12.jpg"
            }
        ]
    },
    {
        id: 7,
        nombre: "Audi A4",
        precio: 38000,
        descripcion: "El Audi A4 es un sedán de lujo que combina un diseño elegante con un rendimiento excepcional.",
        imagen: "ruta/a/audi_a4.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario13",
                textoComentario: "La calidad de construcción es notable.",
                imagenPerfil: "ruta/a/imagenPerfil13.jpg"
            },
            {
                nombreUsuario: "Usuario14",
                textoComentario: "Es un placer conducir este auto.",
                imagenPerfil: "ruta/a/imagenPerfil14.jpg"
            }
        ]
    },
    {
        id: 8,
        nombre: "Volkswagen Golf",
        precio: 23000,
        descripcion: "El Volkswagen Golf es un hatchback versátil y práctico, perfecto para la vida urbana.",
        imagen: "ruta/a/volkswagen_golf.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario15",
                textoComentario: "Su espacio interior es sorprendente.",
                imagenPerfil: "ruta/a/imagenPerfil15.jpg"
            },
            {
                nombreUsuario: "Usuario16",
                textoComentario: "Es un auto muy económico en términos de combustible.",
                imagenPerfil: "ruta/a/imagenPerfil16.jpg"
            }
        ]
    },
    {
        id: 9,
        nombre: "Subaru Outback",
        precio: 32000,
        descripcion: "El Subaru Outback es un crossover que combina la versatilidad de un SUV con la comodidad de un sedán.",
        imagen: "ruta/a/subaru_outback.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario17",
                textoComentario: "Es perfecto para aventuras al aire libre.",
                imagenPerfil: "ruta/a/imagenPerfil17.jpg"
            },
            {
                nombreUsuario: "Usuario18",
                textoComentario: "La tracción en todas las ruedas es excelente en condiciones difíciles.",
                imagenPerfil: "ruta/a/imagenPerfil18.jpg"
            }
        ]
    },
    {
        id: 10,
        nombre: "Tesla Model S",
        precio: 80000,
        descripcion: "El Tesla Model S es un sedán eléctrico de lujo con tecnología de vanguardia y rendimiento impresionante.",
        imagen: "ruta/a/tesla_model_s.jpg",
        comentarios: [
            {
                nombreUsuario: "Usuario19",
                textoComentario: "Es el futuro del automóvil.",
                imagenPerfil: "ruta/a/imagenPerfil19.jpg"
            
            }]
          }

            ]
          }

module.exports = lista
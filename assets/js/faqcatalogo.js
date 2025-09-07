export const faqData = [
  {
    section: "Generales sobre el Sistema de Bibliotecas",
    questions: [
      {
        q: "¿Qué bibliotecas forman parte del catálogo?",
        a: [
          "Biblioteca de Ingeniería – Biblioteca Exactas – Biblioteca de Filosofía – Biblioteca de Sociales – Biblioteca de Arquitectura – Biblioteca de Ciencias de la Salud – Biblioteca Escuela Industrial – Biblioteca del colegio Central – Biblioteca Escuela de Comercio"
        ]
      },
      {
        q: "¿Qué materiales puedo encontrar?",
        a: [
          "Libros, tesis, trabajos finales, revistas, audiovisuales, mapas, notebook, entre otros materiales académicos."
        ]
      },
      {
        q: "¿Puedo acceder desde cualquier lugar?",
        a: [
          "Sí. El catálogo es se encuentra en entorno web y es de acceso público y puede consultarse desde cualquier dispositivo con internet."
        ]
      },
      {
        q: "¿Necesito ser socio/a para buscar?",
        a: [
          "No. La búsqueda es libre."
        ]
      }
    ]
  },
  {
    section: "¿Qué tipos de búsqueda ofrece el catálogo?",
    questions: [
      {
        q: "¿Cómo hago una búsqueda básica (búsqueda simple)?",
        a: [
          "Entra a https://biblioteca.unsj.edu.ar/",
          "En el cuadro de búsqueda, coloca título, autor, tema, ISBN o una frase (ej. enfermería comunitaria).",
          "Presiona Buscar."
        ],
        consejos: [
          "Si ves muchos resultados, aplica filtros (columna lateral): Biblioteca, Tipo de material, Año, Autor, Tema.",
          "Revisa cada resultado por Autor, Título, Año de edición y Biblioteca donde está."
        ]
      },
      {
        q: "¿Cómo uso la búsqueda avanzada?",
        a: [
          "En la página principal, haz clic en Búsqueda avanzada.",
          "Combina campos (Autor, Título, Tema, Editorial, ISBN) con operadores AND / OR / NOT.",
          "Aplica límites por Año, Tipo de material, Idioma o Biblioteca.",
          "Presiona Buscar."
        ],
        consejos: [
          "Comillas para frases exactas: \"educación intercultural\"",
          "Asterisco para truncar: pediatr* (pediatría, pediátrico…)"
        ]
      },
      {
        q: "¿Qué significan las vistas “Normal / MARC / ISBD”?",
        a: [
          "Normal: información pensada para lectura general.",
          "MARC: registro catalográfico técnico (para personal de biblioteca o usuarios avanzados).",
          "ISBD: visualiza la referencia en formato normalizado."
        ]
      }
    ]
  },
  {
    section: "Buenas prácticas para buscar mejor",
    questions: [
      {
        q: "¿Cuáles son las buenas prácticas para buscar mejor?",
        a: [
          "Comienza buscando general y luego refina con filtros.",
          "Prueba sinónimos y truncamientos (educ* → educación, educativo…).",
          "Usa comillas para frases exactas.",
          "Verifica Autor, Título, Año, Biblioteca antes de ir a buscar el ejemplar.",
          "Guarda resultados en carrito (rápido) o listas (si vas a reutilizarlos)."
        ]
      }
    ]
  },
  {
    section: "Interpretar los resultados",
    questions: [
      {
        q: "¿Cómo sé si el libro está disponible y en qué biblioteca se encuentra?",
        a: [
          "Ingresa al registro y mira el bloque de ejemplares:",
          "Estado: “Disponible” / “Prestado hasta [fecha]” / “Solo consulta”.",
          "Ubicación (Biblioteca) + Signatura topográfica (código de estantería)."
        ],
        ejemplo: {
          titulo: "Ejemplo de lectura",
          contenido: [
            "Tipo de ítem: Libro",
            "Ubicación: Biblioteca de Ciencias de la Salud",
            "Signatura: 611.8/T699/15 (es la ubicación del libro en la estantería)",
            "Copia Número: 1 (cantidad de ejemplares que hay en existencia)",
            "Estado: Disponible",
            "Si no estuviera disponible en “Fecha de vencimiento” diría hasta cuando está prestado."
          ],
          imagen: "https://blogbiblio.unsj.edu.ar/wp-content/uploads/2025/09/BusquedaLibroEjemplo.png"
        }
      }
    ]
  },
  {
    section: "Carrito y Listas: organizar y compartir resultados",
    questions: [
      {
        q: "¿Qué es el carrito y cómo se usa?",
        a: [
          "El carrito es una utilidad temporal (no requiere cuenta o ser socio del sistema). Te permite reunir varios registros y enviarlos por correo o imprimir."
        ]
      },
      {
        q: "¿Cómo agregar ítems al carrito?",
        a: [
          "En la lista de resultados, clic en “Añadir al carrito” del ítem que te interese.",
          "Dentro del registro, busca la opción “Añadir al carrito”.",
          "Abre el carrito (arriba a la derecha) para ver lo agregado.",
          "Desde el carrito, puedes enviar por mail, imprimir o vaciar."
        ]
      },
      {
        q: "¿Qué son las listas y cómo se crean?",
        a: [
          "Las listas son colecciones guardadas en tu cuenta (requieren iniciar sesión). Puedes tener listas privadas (las verás desde tu cuenta) o públicas (para verlas no hace falta ingresar a ninguna cuenta de usuario)."
        ]
      },
      {
        q: "¿Cómo crear y usar listas?",
        a: [
          "Inicia sesión en tu cuenta.",
          "En un resultado, elige “Añadir a una lista”.",
          "Crea una lista nueva (ej.: “Sociología – 2024”) o agrégalo a una existente.",
          "Entrando a Mi cuenta → Mis listas, puedes renombrar, ordenar, exportar o compartir (si es pública).",
          "El enlace de la lista se puede compartir entre tus contactos."
        ]
      }
    ]
  },
  {
    section: "Tu cuenta: ingreso, renovaciones, reservas",
    questions: [
      {
        q: "¿Cómo ingreso a mi cuenta?",
        a: [
          "Iniciar sesión.",
          "Ingresa tu usuario otorgado por el sistema cuando te asociaste.",
          "Si no recuerdas tus datos, contacta a tu biblioteca."
        ]
      },
      {
        q: "¿Qué puedo hacer desde mi cuenta?",
        a: [
          "Ver préstamos vigentes y fechas de devolución.",
          "Reservar materiales prestados.",
          "Gestionar listas y datos de contacto.",
          "Cambios de sede (en el caso de cambiarte de carrera y de Facultad)"
        ]
      }
    ]
  },
  {
    section: "Servicios y autogestión",
    questions: [
      {
        q: "¿Puedo pedir libros de otra biblioteca de la UNSJ?",
        a: [
          "Sí, debes estar registrado o ser socio en tu biblioteca de origen para poder usar los recursos que el sistema de bibliotecas ofrece para ello debe estar actualizado en el año académico en curso, además debes presentar tu DNI. Los plazos y condiciones pueden variar según el reglamento de cada biblioteca."
        ]
      },
      {
        q: "¿Cómo actualizo mis datos?",
        a: [
          "Desde Mi cuenta → Sus datos personales (modifica el dato en formulario) → enviar (Esto no aplica para la actualización del año académico en curso, esto lo solicitas de manera presencial al bibliotecario de tu biblioteca de origen solamente)"
        ]
      },
      {
        q: "¿Dónde pido ayuda si el catálogo no devuelve lo que busco?",
        a: [
          "Escribe palabras clave más específicas.",
          "Usa Búsqueda avanzada con Autor/Título/Tema y filtros de Biblioteca, Año, Tipo de material.",
          "Si no aparece, consulta a tu biblioteca para una búsqueda asistida o para sugerir compra."
        ]
      }
    ]
  },
  {
    section: "Solución de problemas",
    questions: [
      {
        q: "Olvidé mi contraseña",
        a: [
          "Pide reseteo en tu biblioteca (por políticas internas, el restablecimiento lo gestiona cada unidad)."
        ]
      },
      {
        q: "El catálogo dice que no tengo préstamos, pero tengo libros en casa",
        a: [
          "Avisa a tu biblioteca para revisar tu registro."
        ]
      }
    ]
  },
  {
    section: "Glosario mínimo",
    questions: [
      {
        q: "Glosario",
        a: [
          "Signatura topográfica: código que indica la ubicación física del libro en estantería.",
          "Carrito: selección temporal de registros para imprimir/enviar por mail.",
          "Lista: selección permanente asociada a tu cuenta (privada o pública).",
          "Reserva: pedido en cola para retirar un libro prestado cuando se devuelve.",
          "Facetas/Filtros: opciones para acotar resultados (biblioteca, tipo, año, autor, tema…).",
          "MARC/ISBD: formatos técnicos de visualización del registro catalográfico."
        ]
      },
      {
        q: "¿Necesitas ayuda?",
        a: [
          "Contacta a tu biblioteca de referencia (mostrador o correo institucional).",
          "Consultas generales del sistema de bibliotecas: sied-bibliotecas@unsj.edu.ar.",
          "Recuerda: puedes buscar de forma global (todas las bibliotecas) o filtrar desde el inicio por la biblioteca que te interese. Y, en cada resultado, revisa autor, título, año de edición y en qué biblioteca está antes de ir a buscarlo."
        ]
      }
    ]
  }
];


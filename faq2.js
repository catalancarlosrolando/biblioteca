const faqArray = [
  {
    id: 1,
    question: "¿Qué es el Repositorio Institucional HURU?",
    answer: {
      text: "Es una plataforma digital de acceso abierto que reúne, preserva y difunde las producciones académicas, científicas y culturales de la UNSJ.",
      link: {
        text: "Disponible en: http://huru.unsj.edu.ar",
        url: "http://huru.unsj.edu.ar"
      }
    }
  },
  {
    id: 2,
    question: "¿Es obligatorio subir mi tesis o trabajo final al Repositorio HURU?",
    answer: {
      text: "Sí. La Ley Nacional 26.899 establece que toda producción académica financiada con fondos públicos debe estar en repositorios digitales de acceso abierto."
    }
  },
  {
    id: 3,
    question: "¿Qué dice la ley?",
    answer: {
      text: "Desde 2013, rige en Argentina la Ley Nacional Nº 26.899, que establece la obligatoriedad del depósito digital de las producciones académicas y científicas financiadas con fondos públicos en repositorios institucionales de acceso abierto.",
      subtext: "Esto incluye tesis, artículos, ponencias, informes técnicos, materiales docentes y otras producciones académicas generadas en universidades públicas como la UNSJ.",
      items: [
        {
          type: "article",
          number: "Artículo 1",
          text: "Obliga a las instituciones a crear repositorios institucionales que permitan el acceso libre, gratuito y universal a su producción académica."
        },
        {
          type: "article",
          number: "Artículo 2",
          text: "Obliga a docentes, investigadores, becarios y estudiantes de posgrado y grado a depositar su producción académica en formato digital, en un plazo máximo de seis meses desde su aprobación o publicación."
        },
        {
          type: "article",
          number: "Artículo 3",
          text: "Establece que el contenido debe estar disponible en acceso abierto, es decir, sin restricciones, salvo excepciones debidamente justificadas."
        }
      ]
    }
  },
  {
    id: 4,
    question: "¿Qué normativas respaldan esta obligación en la UNSJ?",
    answer: {
      items: [
        {
          type: "regulation",
          text: "Resolución Rectoral N° 2328/16-R"
        },
        {
          type: "regulation",
          text: "Ordenanza del Consejo Superior N° 030/22-CS"
        }
      ]
    }
  },
  {
    id: 5,
    question: "¿Para qué sirve la Autorización de Autores?",
    answer: {
      text: "La autorización de autores es una formalidad administrativa, necesaria para registrar legalmente que se cumple con el derecho moral del autor sobre su obra y se consiente su difusión a través del Repositorio HURU."
    }
  },
  {
    id: 6,
    question: "¿Qué pasa si no subo mi tesis?",
    answer: {
      text: "Incurrís en un incumplimiento de la ley nacional. Además, tu trabajo no podrá ser citado ni consultado públicamente."
    }
  },
  {
    id: 7,
    question: "¿Qué beneficios tiene publicar mi tesis en HURU?",
    answer: {
      items: [
        { type: "benefit", text: "Aumenta la visibilidad y el impacto académico." },
        { type: "benefit", text: "Permite ser citado por otros investigadores." },
        { type: "benefit", text: "Otorga un enlace institucional para compartir." },
        { type: "benefit", text: "Contribuye al conocimiento colectivo." },
        { type: "benefit", text: "Contribuye a la transparencia de la investigación financiada con fondos públicos." },
        { type: "benefit", text: "Cumple con la legislación vigente." }
      ]
    }
  },
  {
    id: 8,
    question: "¿Qué significa publicar en acceso abierto?",
    answer: {
      text: "Que cualquier persona puede acceder a tu trabajo sin restricciones económicas ni técnicas, respetando tus derechos como autor/a."
    }
  },
  {
    id: 9,
    question: "¿Pierdo mis derechos al publicar en HURU?",
    answer: {
      text: "No. Conservas tus derechos de autor. Solo autorizas su difusión bajo acceso abierto."
    }
  },
  {
    id: 10,
    question: "¿Puedo publicar también en otros repositorios o plataformas?",
    answer: {
      text: "Sí. Siempre que no firmes exclusividad, puedes compartir en ORCID, Google Scholar, etc."
    }
  },
  {
    id: 11,
    question: "¿Qué pasa si mi tesis tiene coautores?",
    answer: {
      text: "Todos los autores deben firmar el mismo formulario de autorización."
    }
  },
  {
    id: 12,
    question: "¿Puedo solicitar un embargo o restricción?",
    answer: {
      text: "Sí, por causas justificadas como:",
      items: [
        { type: "reason", text: "Información confidencial." },
        { type: "reason", text: "Secreto comercial." },
        { type: "reason", text: "Protección de patentes." }
      ],
      note: "El plazo máximo es de 36 meses (prorrogables)."
    }
  },
  {
    id: 13,
    question: "¿La Ley habla de excepciones?",
    answer: {
      text: "La Ley Nacional Nº 26.899 establece de manera general la obligatoriedad del depósito en repositorios digitales institucionales de acceso abierto para las producciones científicas y académicas generadas con financiamiento público. Sin embargo, contempla algunas excepciones que permiten restringir el acceso público a determinados documentos.",
      subsections: [
        {
          title: "Excepciones al acceso abierto según la Ley 26.899",
          content: {
            article: {
              number: "Artículo 4",
              text: "El acceso abierto podrá ser restringido en aquellos casos en que medien motivos fundados de confidencialidad, seguridad, derechos de terceros o cuando esté prevista una posible protección mediante la legislación de propiedad intelectual."
            },
            explanation: "Esto implica que se puede restringir temporalmente el acceso abierto (por ejemplo, bajo embargo o con una nota justificativa) si se cumplen al menos uno de estos criterios:",
            cases: [
              {
                title: "Confidencialidad",
                text: "Por ejemplo, si el trabajo contiene información sensible, protegida por convenios de confidencialidad o acuerdos con terceros (empresas, hospitales, instituciones privadas, etc.)."
              },
              {
                title: "Seguridad",
                text: "Si la difusión del contenido compromete la seguridad institucional, de personas o instalaciones."
              },
              {
                title: "Derechos de terceros",
                text: "Cuando la tesis o producción incluye imágenes, textos o datos protegidos por derechos de autor de otras personas o entidades, y no se cuenta con las licencias necesarias para su reproducción abierta."
              },
              {
                title: "Protección por propiedad intelectual",
                text: "Si se planea registrar una patente, modelo de utilidad u otro tipo de derecho de propiedad intelectual basado en el contenido del trabajo (por ejemplo, investigaciones aplicadas con fines comerciales)."
              }
            ],
            actions: {
              title: "¿Qué se puede hacer en esos casos?",
              items: [
                "Se puede solicitar un plazo de embargo temporal (por lo general, hasta 12 meses), tras el cual el trabajo será de acceso abierto.",
                "También se puede restringir el acceso total o parcial (por ejemplo, subir el resumen o ciertos capítulos).",
                "Es necesario justificar esta decisión mediante una nota de excepción firmada por el autor y avalada por la institución."
              ]
            },
            important: "Estas restricciones no eximen del depósito en el repositorio: El trabajo debe subirse igualmente al repositorio institucional con la correspondiente justificación y, de ser necesario, con el acceso restringido según lo indicado."
          }
        }
      ]
    }
  },
  {
    id: 14,
    question: "¿Hay un período máximo de embargo?",
    answer: {
      text: "Según la Ley 26.899 de Argentina sobre repositorios de acceso abierto, los embargos (es decir, el período durante el cual una obra no se publica en acceso abierto aunque haya sido depositada en el repositorio) tienen una duración máxima de 12 meses.",
      lawReference: {
        article: "Artículo 3",
        text: "Los instituciones públicos de ciencia y tecnología deberán poner a disposición en acceso abierto la producción científica o tecnológica en un plazo no superior a 12 meses desde la fecha de publicación o aprobación, según corresponda."
      },
      conclusions: [
        "El embargo no puede superar los 12 meses desde la fecha de publicación del artículo o desde la aprobación del trabajo final o tesis.",
        "Pasado ese plazo, la institución debe garantizar el acceso abierto al documento."
      ],
      extension: {
        title: "¿Y si el autor quiere extender el embargo?",
        text: "No es posible extenderlo legalmente más allá de los 12 meses, salvo en casos muy excepcionales que impliquen:",
        items: [
          "Patentes en trámite,",
          "Convenios de confidencialidad,",
          "Material con datos sensibles (ej. salud, minoridad, protección de identidades)."
        ],
        note: "Incluso en esos casos, se deben presentar justificaciones formales y por escrito, y las instituciones deben documentarlas."
      },
      importantNotes: [
        "El embargo no impide el depósito del material en el repositorio. Solo restringe el acceso público durante un plazo breve.",
        "Se puede dejar el registro con metadatos visibles y el archivo en embargo hasta que finalice el plazo."
      ]
    }
  },
  {
    id: 15,
    question: "¿Puedo publicar en más de una institución si tengo doble pertenencia?",
    answer: {
      text: "Sí, si tienes vínculo con ambas instituciones públicas, y la producción está relacionada con ambas, ambas tienen derecho a depositar ese material en su repositorio institucional.",
      explanation: "Esto se conoce como 'depósito duplicado' y no solo está permitido, sino que es recomendable, porque:",
      benefits: [
        "Incrementa la visibilidad de la producción académica.",
        "Aumenta las posibilidades de citación.",
        "Fortalece la política de acceso abierto en ambas instituciones.",
        "Atribuye correctamente la doble filiación del autor o autora."
      ]
    }
  },
  {
    id: 16,
    question: "¿Qué se recomienda hacer si hago un 'depósito duplicado'?",
    answer: {
      recommendations: [
        "Depositar la producción en el repositorio de la institución donde se cursa la carrera (por ejemplo, en el Repositorio Huru si es una tesis de la EUCS).",
        "Depositar también en el repositorio de la otra institución (por ejemplo, CONICET Digital, CIC, SEDICI, etc.) si allí se trabaja o investiga.",
        "Mencionar ambas filiaciones en el documento o en los metadatos del repositorio (si corresponde).",
        "En algunos casos, puede bastar con enlazar desde uno hacia el otro, si la política institucional lo prevé."
      ],
      importantNote: {
        title: "Nota importante:",
        text: "Si se publica en dos repositorios, es importante:",
        items: [
          "Que se respete la autoría y la integridad del archivo.",
          "Que se use la versión final aprobada del trabajo.",
          "Que se indique la licencia de uso (Creative Commons).",
          "Que no se infrinjan derechos de editoriales u otros terceros, si los hay."
        ]
      }
    }
  },
  {
    id: 17,
    question: "¿Dónde puedo ver cómo quedó publicada mi tesis?",
    answer: {
      text: "Recibirás por correo electrónico el enlace al documento en el Repositorio. Si no recibes un correo con el enlace, o pierdes el mismo puedes ingresar al Repositorio Institucional HURU a través de:",
      link: {
        text: "http://huru.unsi.edu.ar/",
        url: "http://huru.unsi.edu.ar/"
      },
      instructions: "Luego deberá buscar dentro de su Comunidad (Unidad Académica: facultad, colegio SIED, etc.) en la caja de búsqueda."
    }
  },
  {
    id: 18,
    question: "¿Puedo compartir mi trabajo en mi currículum o redes?",
    answer: {
      text: "Sí. Es una publicación válida con registro institucional. Puedes difundirlo en tu CV, LinkedIn, becas, concursos o posgrados."
    }
  },
  {
    id: 19,
    question: "¿Quién puede consultar mi trabajo una vez publicado?",
    answer: {
      text: "Cualquier persona del país o del mundo, sin necesidad de usuario o clave. El acceso abierto garantiza visibilidad, transparencia y democratización del conocimiento."
    }
  },
  {
    id: 20,
    question: "¿Puede mi trabajo ser citado por otros investigadores?",
    answer: {
      text: "Sí. HURU te asigna un enlace permanente (URL persistente) que permite citar correctamente tu tesis."
    }
  },
  {
    id: 21,
    question: "Resumen de la Ley 26.899 Acceso Abierto a la Producción Científica y Académica Argentina",
    answer: {
      sections: [
        {
          title: "¿Qué es esta ley?",
          content: "La Ley 26.899, sancionada en 2013, establece que todas las producciones académicas, científicas y técnicas financiadas con fondos públicos deben ser depositadas en repositorios digitales institucionales de acceso abierto."
        },
        {
          title: "¿Cuál es su objetivo?",
          content: "Garantizar que la producción intelectual generada con fondos del Estado esté disponible de forma gratuita, libre y en línea, promoviendo:",
          items: [
            "La democratización del conocimiento,",
            "El acceso a la información científica,",
            "La visibilidad de la producción nacional."
          ]
        },
        {
          title: "¿Qué materiales deben depositarse?",
          content: "Todos los documentos financiados total o parcialmente con fondos públicos, entre ellos:",
          items: [
            "Tesis de grado y posgrado,",
            "Artículos científicos,",
            "Informes técnicos,",
            "Datos primarios de investigación,",
            "Libros y capítulos de libros,",
            "Trabajos presentados en congresos."
          ]
        },
        {
          title: "¿En qué plazo?",
          content: "Los materiales deben ser depositados en un máximo de 12 meses desde su aprobación o publicación."
        },
        {
          title: "¿Quiénes están obligados?",
          content: "Las instituciones del sistema nacional de ciencia, tecnología y educación superior, como la UNSJ, sus unidades académicas, docentes, investigadores/as, estudiantes y equipos técnicos que produzcan contenidos en ese marco."
        },
        {
          title: "¿Qué pasa con los derechos de autor?",
          items: [
            "El depósito no vulnera los derechos del autor, ni impide publicar luego en revistas o editoriales.",
            "Se pueden establecer embargos temporales (hasta 12 meses) si hay razones fundadas.",
            "El autor debe solicitar el uso de la licencia Creative Commons para definir el uso permitido de su trabajo."
          ]
        },
        {
          title: "¿Por qué es importante para vos?",
          items: [
            "Estudiantes: tu tesis formará parte del patrimonio académico nacional.",
            "Docentes e investigadores: aumenta la visibilidad, impacto y citación de tu producción.",
            "Egresados/as: podrás incluir el enlace a tu trabajo en tu CV digital.",
            "Nodocentes: contribuyen al acceso abierto desde su rol técnico-administrativo."
          ]
        }
      ]
    }
  },
  {
    id: 22,
    question: "¿Dónde obtengo información general?",
    answer: {
      text: "Escribí al:",
      contact: {
        label: "Nexo SIED-Bibliotecas UNSJ:",
        email: "sied-bibliotecas@unsj.edu.ar"
      }
    }
  }
];


// Función para generar el contenido HTML de una respuesta
        function generateAnswerHTML(answerData) {
            let html = '<div class="answer-content">';
            
            if (answerData.text) {
                html += `<p>${answerData.text}</p>`;
            }
            
            if (answerData.subtext) {
                html += `<p>${answerData.subtext}</p>`;
            }
            
            if (answerData.link) {
                html += `<p><a href="${answerData.url}" target="_blank">${answerData.link.text}</a></p>`;
            }
            
            if (answerData.items) {
                html += '<ul>';
                answerData.items.forEach(item => {
                    if (item.type === "article") {
                        html += `<li><span class="article-ref">${item.number}:</span> ${item.text}</li>`;
                    } else {
                        html += `<li>${item.text}</li>`;
                    }
                });
                html += '</ul>';
            }
            
            html += '</div>';
            return html;
        }

        // Función para renderizar las preguntas frecuentes
        function renderFAQs() {
            const faqContainer = document.getElementById('faq-container');
            faqContainer.innerHTML = '';
            
            faqArray.forEach(faq => {
                const faqItem = document.createElement('div');
                faqItem.className = 'faq-item';
                faqItem.dataset.id = faq.id;
                
                const questionDiv = document.createElement('div');
                questionDiv.className = 'faq-question';
                questionDiv.textContent = faq.question;
                
                const answerDiv = document.createElement('div');
                answerDiv.className = 'faq-answer';
                answerDiv.innerHTML = generateAnswerHTML(faq.answer);
                
                faqItem.appendChild(questionDiv);
                faqItem.appendChild(answerDiv);
                faqContainer.appendChild(faqItem);
                
                // Añadir evento de clic para expandir/colapsar
                questionDiv.addEventListener('click', () => {
                    faqItem.classList.toggle('active');
                });
            });
        }

        // Función para buscar en las preguntas frecuentes
        function setupSearch() {
            const searchInput = document.getElementById('search');
            const noResults = document.getElementById('no-results');
            const faqItems = document.querySelectorAll('.faq-item');
            
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase().trim();
                let resultsFound = false;
                
                faqItems.forEach(item => {
                    const question = item.querySelector('.faq-question').textContent.toLowerCase();
                    const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
                    
                    if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                        item.style.display = 'block';
                        resultsFound = true;
                        
                        // Resaltar el término de búsqueda
                        if (searchTerm) {
                            const questionElement = item.querySelector('.faq-question');
                            const answerElement = item.querySelector('.answer-content');
                            
                            // Limpiar resaltado anterior
                            questionElement.innerHTML = questionElement.textContent;
                            answerElement.innerHTML = answerElement.textContent;
                            
                            // Resaltar en la pregunta
                            questionElement.innerHTML = questionElement.innerHTML.replace(
                                new RegExp(searchTerm, 'gi'),
                                match => `<mark>${match}</mark>`
                            );
                            
                            // Resaltar en la respuesta
                            answerElement.innerHTML = answerElement.innerHTML.replace(
                                new RegExp(searchTerm, 'gi'),
                                match => `<mark>${match}</mark>`
                            );
                        }
                    } else {
                        item.style.display = 'none';
                    }
                });
                
                // Mostrar mensaje si no hay resultados
                noResults.style.display = resultsFound ? 'none' : 'block';
            });
        }

        // Función para el botón de volver arriba
        function setupBackToTop() {
            const backToTopBtn = document.getElementById('back-to-top');
            
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Inicializar cuando el DOM esté cargado
        document.addEventListener('DOMContentLoaded', () => {
            renderFAQs();
            setupSearch();
            setupBackToTop();
        });
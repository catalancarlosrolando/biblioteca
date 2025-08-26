const faqs = [
    {
        id: "q1",
        question: "¿Qué es el Repositorio Institucional HURU?",
        answer: "Es una plataforma digital de acceso abierto que reúne, preserva y difunde las producciones académicas, científicas y culturales de la UNSJ. Disponible en: http://huru.unsj.edu.ar"
    },
    {
        id: "q2",
        question: "¿Es obligatorio subir mi tesis o trabajo final al Repositorio HURU?",
        answer: "Sí. La Ley Nacional 26.899 establece que toda producción académica financiada con fondos públicos debe estar en repositorios digitales de acceso abierto."
    },
    {
        id: "q3",
        question: "¿Qué dice la ley?",
        answer: "Desde 2013, rige en Argentina la Ley Nacional Nº 26.899, que establece la obligatoriedad del depósito digital de las producciones académicas y científicas financiadas con fondos públicos en repositorios institucionales de acceso abierto. Esto incluye tesis, artículos, ponencias, informes técnicos, materiales docentes y otras producciones académicas generadas en universidades públicas como la UNSJ."
    },
    {
        id: "q4",
        question: "¿Qué normativas respaldan esta obligación en la UNSJ?",
        answer: "Resolución Rectoral N° 2328/16-R y Ordenanza del Consejo Superior N° 030/22-CS."
    },
    {
        id: "q5",
        question: "¿Para qué sirve la Autorización de Autores?",
        answer: "La autorización de autores es una formalidad administrativa, necesaria para registrar legalmente que se cumple con el derecho moral del autor sobre su obra y se consiente su difusión a través del Repositorio HURU."
    },
    {
        id: "q6",
        question: "¿Qué pasa si no subo mi tesis?",
        answer: "Incurrís en un incumplimiento de la ley nacional. Además, tu trabajo no podrá ser citado ni consultado públicamente."
    },
    {
        id: "q7",
        question: "¿Qué beneficios tiene publicar mi tesis en HURU?",
        answer: "Aumenta la visibilidad y el impacto académico, permite ser citado por otros investigadores, otorga un enlace institucional para compartir, contribuye al conocimiento colectivo, contribuye a la transparencia de la investigación financiada con fondos públicos y cumple con la legislación vigente."
    },
    {
        id: "q8",
        question: "¿Qué significa publicar en acceso abierto?",
        answer: "Que cualquier persona puede acceder a tu trabajo sin restricciones económicas ni técnicas, respetando tus derechos como autor/a."
    },
    {
        id: "q9",
        question: "¿Pierdo mis derechos al publicar en HURU?",
        answer: "No. Conservas tus derechos de autor. Solo autorizas su difusión bajo acceso abierto."
    },
    {
        id: "q10",
        question: "¿Puedo publicar también en otros repositorios o plataformas?",
        answer: "Sí. Siempre que no firmes exclusividad, puedes compartir en ORCID, Google Scholar, etc."
    },
    {
        id: "q11",
        question: "¿Qué pasa si mi tesis tiene coautores?",
        answer: "Todos los autores deben firmar el mismo formulario de autorización."
    },
    {
        id: "q12",
        question: "¿Puedo solicitar un embargo o restricción?",
        answer: "Sí, por causas justificadas como: información confidencial, secreto comercial o protección de patentes. El plazo máximo es de 36 meses (prorrogables)."
    },
    {
        id: "q13",
        question: "¿La Ley habla de excepciones?",
        answer: "La Ley Nacional Nº 26.899 establece de manera general la obligatoriedad del depósito en repositorios digitales institucionales de acceso abierto, pero contempla excepciones que permiten restringir el acceso público a determinados documentos por motivos fundados de confidencialidad, seguridad, derechos de terceros o cuando esté prevista una posible protección mediante la legislación de propiedad intelectual."
    },
    {
        id: "q14",
        question: "¿Hay un período máximo de embargo?",
        answer: "Según la Ley 26.899 de Argentina sobre repositorios de acceso abierto, los embargos (es decir, el período durante el cual una obra no se publica en acceso abierto aunque haya sido depositada en el repositorio) tienen una duración máxima de 12 meses."
    },
    {
        id: "q15",
        question: "¿Puedo publicar en más de una institución si tengo doble pertenencia?",
        answer: "Sí, si tienes vínculo con ambas instituciones públicas, y la producción está relacionada con ambas, ambas tienen derecho a depositar ese material en su repositorio institucional. Esto se conoce como 'depósito duplicado' y no solo está permitido, sino que es recomendable."
    },
    {
        id: "q16",
        question: "¿Qué se recomienda hacer si hago un 'depósito duplicado'?",
        answer: "1. Depositar la producción en el repositorio de la institución donde se cursa la carrera. 2. Depositar también en el repositorio de la otra institución si allí se trabaja o investiga. 3. Mencionar ambas filiaciones en el documento o en los metadatos del repositorio. 4. En algunos casos, puede bastar con enlazar desde uno hacia el otro, si la política institucional lo prevé."
    },
    {
        id: "q17",
        question: "¿Dónde puedo ver cómo quedó publicada mi tesis?",
        answer: "Recibirás por correo electrónico el enlace al documento en el Repositorio. Si no recibes un correo con el enlace, o pierdes el mismo puedes ingresar al Repositorio Institucional HURU a través de: http://huru.unsj.edu.ar/. Luego deberá buscar dentro de su Comunidad (Unidad Académica: facultad, colegio SIED, etc.) en la caja de búsqueda."
    },
    {
        id: "q18",
        question: "¿Puedo compartir mi trabajo en mi currículum o redes?",
        answer: "Sí. Es una publicación válida con registro institucional. Puedes difundirlo en tu CV, LinkedIn, becas, concursos o posgrados."
    },
    {
        id: "q19",
        question: "¿Quién puede consultar mi trabajo una vez publicado?",
        answer: "Cualquier persona del país o del mundo, sin necesidad de usuario o clave. El acceso abierto garantiza visibilidad, transparencia y democratización del conocimiento."
    },
    {
        id: "q20",
        question: "¿Puede mi trabajo ser citado por otros investigadores?",
        answer: "Sí. HURU te asigna un enlace permanente (URL persistente) que permite citar correctamente tu tesis."
    },
    {
        id: "q21",
        question: "Resumen de la Ley 26.899 Acceso Abierto a la Producción Científica y Académica Argentina",
        answer: "La Ley 26.899, sancionada en 2013, establece que todas las producciones académicas, científicas y técnicas financiadas con fondos públicos deben ser depositadas en repositorios digitales institucionales de acceso abierto. Su objetivo es garantizar que la producción intelectual generada con fondos del Estado esté disponible de forma gratuita, libre y en línea, promoviendo la democratización del conocimiento, el acceso a la información científica y la visibilidad de la producción nacional."
    },
    {
        id: "q22",
        question: "¿Dónde obtengo información general?",
        answer: "Escribí al: Nexo SIED-Bibliotecas UNSJ: sied-bibliotecas@unsj.edu.ar"
    }
];

        // Variables globales
        let currentSearchTerm = '';
        let filteredFaqs = [...faqs];
        const container = document.getElementById("faq-container");
        const searchStats = document.getElementById("searchStats");
        const clearButton = document.getElementById("clearButton");
        const searchInput = document.getElementById("searchInput");

        // Función para renderizar las preguntas
        function renderFaqs(faqsToRender) {
            container.innerHTML = '';
            
            if (faqsToRender.length === 0) {
                container.innerHTML = '<div class="no-results">No se encontraron resultados para tu búsqueda.</div>';
                clearButton.style.display = 'block';
                return;
            }
            
            faqsToRender.forEach(faq => {
                //const card = document.createElement("div");
                //card.className = "faq-card";
                //card.id = faq.id;
                const card = document.createElement("div");
                card.className = "faq-card";

                card.innerHTML = `
                    <input type="checkbox" id="${faq.id}">
                    <label for="${faq.id}" class="question">${faq.question}</label>
                    <div class="answer">${faq.answer}</div>
                `;

                container.appendChild(card);
            });
            
            // Actualizar estadísticas de búsqueda
            updateSearchStats(faqsToRender.length);
        }

        // Función para resaltar términos de búsqueda
        function highlightSearchTerms(text, searchTerm) {
            if (!searchTerm) return text;
            
            const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
            return text.replace(regex, '<mark>$1</mark>');
        }

        // Función para escapar caracteres especiales en regex
        function escapeRegex(string) {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }

        // Función para actualizar estadísticas de búsqueda
        function updateSearchStats(resultsCount) {
            if (currentSearchTerm) {
                searchStats.textContent = `Se encontraron ${resultsCount} resultado(s) para "${currentSearchTerm}"`;
                searchStats.style.display = 'block';
                clearButton.style.display = 'block';
            } else {
                searchStats.textContent = '';
                searchStats.style.display = 'none';
                clearButton.style.display = 'none';
            }
        }

        // Función para buscar contenido
        function searchContent() {
            currentSearchTerm = searchInput.value.trim().toLowerCase();
            
            if (currentSearchTerm === '') {
                filteredFaqs = [...faqs];
            } else {
                filteredFaqs = faqs.filter(faq => 
                    faq.question.toLowerCase().includes(currentSearchTerm) || 
                    faq.answer.toLowerCase().includes(currentSearchTerm)
                );
            }
            
            renderFaqs(filteredFaqs);
        }

        // Función para manejar la tecla Enter en la búsqueda
        function handleSearchKeyup(event) {
            if (event.key === 'Enter') {
                searchContent();
            }
        }

        // Función para limpiar la búsqueda
        function clearSearch() {
            searchInput.value = '';
            currentSearchTerm = '';
            filteredFaqs = [...faqs];
            renderFaqs(filteredFaqs);
        }

        // Función para mostrar/ocultar respuestas
        function toggleAnswer(id) {
            const answerElement = document.getElementById(`answer-${id}`);
            answerElement.classList.toggle('open');
        }

        // Inicializar la visualización de FAQs
        renderFaqs(faqs);
import { faqData } from "./faqcatalogo.js";

 // Genera el HTML FAQ
    function renderFAQ(data) {
      const faqDiv = document.getElementById('faq');
      faqDiv.innerHTML = "";
      data.forEach(section => {
        const secDiv = document.createElement('div');
        secDiv.className = 'faq-section';
        secDiv.innerHTML = `<h2>${section.section}</h2>`;
        section.questions.forEach((qObj, idx) => {
          const qDiv = document.createElement('div');
          qDiv.className = 'faq-question';
          // Pregunta principal
          let content = `<div class="faq-q">${idx + 1}. ${qObj.q}</div>`;
          // Respuesta principal
          if (Array.isArray(qObj.a)) {
            content += `<div class="faq-a"><ul>${qObj.a.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
          } else {
            content += `<div class="faq-a">${qObj.a}</div>`;
          }
          // Consejos rápidos (si existen)
          if (qObj.consejos) {
            content += `<div class="faq-consejos"><div class="faq-consejos-title">Consejos rápidos:</div><ul>${qObj.consejos.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
          }
          // Ejemplo especial de interpretación de resultados
          if (qObj.ejemplo) {
            content += `<div class="faq-ejemplo">
              <div class="faq-ejemplo-title">${qObj.ejemplo.titulo}</div>
              <ul>${qObj.ejemplo.contenido.map(e => `<li>${e}</li>`).join('')}</ul>
              <img class="faq-ejemplo-img" src="${qObj.ejemplo.imagen}" alt="Ejemplo de búsqueda de libro" onclick="window.openImageModal('${qObj.ejemplo.imagen}')">
            </div>`;
          }
          qDiv.innerHTML = content;
          secDiv.appendChild(qDiv);
        });
        faqDiv.appendChild(secDiv);
      });
    }
    renderFAQ(faqData);

    // Definir la función modal globalmente
    window.openImageModal = function(imgSrc) {
      const modal = document.createElement('div');
      modal.className = 'image-modal';
      modal.innerHTML = `
        <div class="modal-content">
          <img src="${imgSrc}" alt="Imagen ampliada">
          <span class="close-modal">&times;</span>
        </div>
      `;
      
      document.body.appendChild(modal);
      
      // Cerrar modal al hacer clic fuera o en la X
      modal.onclick = function(e) {
        if (e.target === modal || e.target.classList.contains('close-modal')) {
          modal.remove();
        }
      };

      // Cerrar modal con la tecla ESC
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          modal.remove();
        }
      }, { once: true });
    };


   // Función para normalizar texto (eliminar acentos)
function normalizeText(text) {
  return text.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

document.addEventListener('DOMContentLoaded', () => {
  // Crear input de búsqueda
  const searchDiv = document.createElement('div');
  searchDiv.className = 'faq-search-container';
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Buscar en las preguntas...';
  searchInput.className = 'faq-search-input';
  searchDiv.appendChild(searchInput);

  // Insertar el input antes del contenedor de preguntas
  const faqContainer = document.getElementById('faq');
  faqContainer.parentNode.insertBefore(searchDiv, faqContainer);

  // Renderizar todas las preguntas al inicio
  //renderFAQ(faqArray);

  // 2. Filtrar preguntas al escribir
  searchInput.addEventListener('input', (e) => {
    const value = normalizeText(e.target.value.trim());
    if (!value) {
      renderFAQ(faqData);
      return;
    }

    const filtered = faqData.filter(section => {
      // Filtrar las preguntas dentro de cada sección
      const matchingQuestions = section.questions.filter(qItem => {
        const questionText = normalizeText(qItem.q);
        const answerText = Array.isArray(qItem.a) 
          ? normalizeText(qItem.a.join(' '))
          : normalizeText(qItem.a);
        
        return questionText.includes(value) || answerText.includes(value);
      });

      // Crear una nueva sección solo con las preguntas que coinciden
      if (matchingQuestions.length > 0) {
        return {
          ...section,
          questions: matchingQuestions
        };
      }
      return false;
    }).filter(Boolean); // Eliminar secciones sin coincidencias

    renderFAQ(filtered);
  });
});
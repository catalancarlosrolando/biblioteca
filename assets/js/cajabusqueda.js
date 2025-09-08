import { faqData } from "./faqcatalogo.js";

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
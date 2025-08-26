import { faqArray } from "./Faqarray.js";

// Utilidad para crear elementos con clases y contenido
function createElem(type, className, content) {
  const e = document.createElement(type);
  if (className) e.className = className;
  if (content !== undefined && content !== null) e.innerHTML = content;
  return e;
}

// Renderiza la respuesta según el tipo de contenido
function renderAnswer(answer) {
  const container = document.createElement('div');

  // Texto principal
  if (answer.text) {
    container.appendChild(createElem('div', '', answer.text));
  }

  // Subtexto
  if (answer.subtext) {
    container.appendChild(createElem('div', '', answer.subtext));
  }

  // Link
  if (answer.link) {
    const a = document.createElement('a');
    a.href = answer.link.url;
    a.textContent = answer.link.text;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'faq-link';
    container.appendChild(a);
  }

  // Contacto
  if (answer.contact) {
    const div = createElem('div', 'faq-contact', `${answer.contact.label} <a href="mailto:${answer.contact.email}" class="faq-link">${answer.contact.email}</a>`);
    container.appendChild(div);
  }

  // Instrucciones
  if (answer.instructions) {
    container.appendChild(createElem('div', '', answer.instructions));
  }

  // Nota
  if (answer.note) {
    container.appendChild(createElem('span', 'faq-note', answer.note));
  }

  // Importante
  if (answer.important) {
    container.appendChild(createElem('span', 'faq-important', answer.important));
  }
  if (answer.importantNotes) {
    answer.importantNotes.forEach(note =>
      container.appendChild(createElem('span', 'faq-important', note))
    );
  }
  if (answer.importantNote) {
    container.appendChild(createElem('span', 'faq-important-note', `<b>${answer.importantNote.title}</b><br>${answer.importantNote.text}`));
    if (answer.importantNote.items) {
      const ul = document.createElement('ul');
      ul.className = 'faq-sublist';
      answer.importantNote.items.forEach(i => {
        const li = createElem('li', '', i);
        ul.appendChild(li);
      });
      container.appendChild(ul);
    }
  }

  // Items (lista de artículos, beneficios, razones, regulaciones...)
  if (answer.items) {
    const ul = document.createElement('ul');
    ul.className = 'faq-list';
    answer.items.forEach(item => {
      const li = document.createElement('li');
      if (item.number) {
        li.innerHTML = `<span class="faq-article">${item.number}:</span> ${item.text}`;
      } else {
        li.textContent = item.text;
      }
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Subsections (casos excepcionales de ley)
  if (answer.subsections) {
    answer.subsections.forEach(sub => {
      container.appendChild(createElem('div', 'faq-section-title', sub.title));
      // Artículo
      if (sub.content.article) {
        container.appendChild(createElem('div', 'faq-article', `${sub.content.article.number}: ${sub.content.article.text}`));
      }
      // Explicación
      if (sub.content.explanation) {
        container.appendChild(createElem('div', '', sub.content.explanation));
      }
      // Casos
      if (sub.content.cases) {
        const ul = document.createElement('ul');
        ul.className = 'faq-list';
        sub.content.cases.forEach(c => {
          const li = document.createElement('li');
          li.innerHTML = `<b>${c.title}:</b> ${c.text}`;
          ul.appendChild(li);
        });
        container.appendChild(ul);
      }
      // Acciones
      if (sub.content.actions) {
        container.appendChild(createElem('div', 'faq-section-title', sub.content.actions.title));
        const ul = document.createElement('ul');
        ul.className = 'faq-sublist';
        sub.content.actions.items.forEach(i => {
          const li = document.createElement('li');
          li.textContent = i;
          ul.appendChild(li);
        });
        container.appendChild(ul);
      }
      // Importante
      if (sub.content.important) {
        container.appendChild(createElem('span', 'faq-important', sub.content.important));
      }
    });
  }

  // Law Reference
  if (answer.lawReference) {
    container.appendChild(createElem('span', 'faq-article', `${answer.lawReference.article}: ${answer.lawReference.text}`));
  }

  // Conclusions (lista)
  if (answer.conclusions) {
    const ul = document.createElement('ul');
    ul.className = 'faq-list';
    answer.conclusions.forEach(c => {
      const li = document.createElement('li');
      li.textContent = c;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Extension info
  if (answer.extension) {
    container.appendChild(createElem('div', 'faq-section-title', answer.extension.title));
    container.appendChild(createElem('div', '', answer.extension.text));
    if (answer.extension.items) {
      const ul = document.createElement('ul');
      ul.className = 'faq-sublist';
      answer.extension.items.forEach(i => {
        const li = document.createElement('li');
        li.textContent = i;
        ul.appendChild(li);
      });
      container.appendChild(ul);
    }
    if (answer.extension.note) {
      container.appendChild(createElem('span', 'faq-note', answer.extension.note));
    }
  }

  // Benefits
  if (answer.benefits) {
    const ul = document.createElement('ul');
    ul.className = 'faq-list';
    answer.benefits.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Recommendations
  if (answer.recommendations) {
    const ul = document.createElement('ul');
    ul.className = 'faq-list';
    answer.recommendations.forEach(r => {
      const li = document.createElement('li');
      li.textContent = r;
      ul.appendChild(li);
    });
    container.appendChild(ul);
  }

  // Secciones especiales (ley resumen)
  if (answer.sections) {
    answer.sections.forEach(sec => {
      container.appendChild(createElem('div', 'faq-section-title', sec.title));
      if (sec.content) container.appendChild(createElem('div', '', sec.content));
      if (sec.items) {
        const ul = document.createElement('ul');
        ul.className = 'faq-list';
        sec.items.forEach(i => {
          const li = document.createElement('li');
          li.textContent = i;
          ul.appendChild(li);
        });
        container.appendChild(ul);
      }
    });
  }

  return container;
}

// Render principal
function renderFAQ(array) {
  const faqContainer = document.getElementById('faq-container');
  faqContainer.innerHTML = '';
  array.forEach(item => {
    const faqItem = createElem('div', 'faq-item');
    const question = createElem('div', 'faq-question', item.question);
    const answer = createElem('div', 'faq-answer');
    answer.appendChild(renderAnswer(item.answer));

    // Mostrar/ocultar con animación
    question.addEventListener('click', () => {
      faqItem.classList.toggle('open');
    });

    faqItem.appendChild(question);
    faqItem.appendChild(answer);
    faqContainer.appendChild(faqItem);
  });
}

// 1. Agrega el input de búsqueda al cargar la página
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
  const faqContainer = document.getElementById('faq-container');
  faqContainer.parentNode.insertBefore(searchDiv, faqContainer);

  // Renderizar todas las preguntas al inicio
  renderFAQ(faqArray);

  // 2. Filtrar preguntas al escribir
  searchInput.addEventListener('input', (e) => {
    const value = e.target.value.trim().toLowerCase();
    if (!value) {
      renderFAQ(faqArray);
      return;
    }
    const filtered = faqArray.filter(item => {
      // Buscar en pregunta y en texto de respuesta (si existe)
      const question = item.question.toLowerCase();
      let answerText = '';
      if (item.answer.text) answerText = item.answer.text.toLowerCase();
      return question.includes(value) || answerText.includes(value);
    });
    renderFAQ(filtered);
  });
});
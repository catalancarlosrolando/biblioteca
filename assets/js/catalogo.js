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
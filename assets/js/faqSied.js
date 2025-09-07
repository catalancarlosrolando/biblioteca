import {faqData} from "./faqdata.js";

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
          qDiv.innerHTML = `
            <div class="faq-q">${idx + 1}. ${qObj.q}</div>
            <div class="faq-a">${Array.isArray(qObj.a) ?
              `<ul>${qObj.a.map(item => `<li>${item}</li>`).join('')}</ul>`
              : qObj.a}
            </div>
          `;
          secDiv.appendChild(qDiv);
        });
        faqDiv.appendChild(secDiv);
      });
    }
    renderFAQ(faqData);
import { menuData } from "./normativasinfo.js";

document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('menu-container');
            
            menuData.forEach(section => {
                const sectionEl = document.createElement('div');
                sectionEl.className = 'section-card';
                
                const titleEl = document.createElement('h2');
                titleEl.className = 'section-title';
                titleEl.textContent = section.title;
                
                const linksList = document.createElement('ul');
                linksList.className = 'links-list';
                
                section.links.forEach(link => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = link.url;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    a.textContent = link.text;
                    li.appendChild(a);
                    linksList.appendChild(li);
                });
                
                sectionEl.appendChild(titleEl);
                sectionEl.appendChild(linksList);
                container.appendChild(sectionEl);
            });
        });
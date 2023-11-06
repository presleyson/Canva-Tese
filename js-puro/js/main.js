// main.js
window.onload = () => {
  const openModalButton = document.getElementById('button-canva');

  openModalButton.addEventListener('click', () => {
    // Importa o módulo do modal dinamicamente
    import('./modal.js')
      .then((module) => {
        module.createModal();

        const stylesLink = document.createElement('link');
        stylesLink.rel = 'stylesheet';
        stylesLink.href = '../css/modal.css';
        document.head.appendChild(stylesLink);
      })
      .catch((error) => {
        console.error('Erro ao carregar o módulo do modal:', error);
      });
  });
};

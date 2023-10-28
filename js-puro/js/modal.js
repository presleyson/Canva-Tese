const options = [
  { value: '', label: '' },
  { value: 'Mercado', label: 'Mercado' },
  { value: 'Problema', label: 'Problema' },
  { value: 'Geração de idéias', label: 'Geração de idéias' },
  { value: 'Idéias Selecionadas', label: 'Idéias Selecionadas' },
  { value: 'Recursos Financeiros', label: 'Recursos Financeiros' },
  { value: 'Recursos Técnicos', label: 'Recursos Técnicos' },
  { value: 'Principais Parceiros', label: 'Principais Parceiros' },
  { value: 'Resultados', label: 'Resultados' },
  { value: 'Planejamento Estratégico', label: 'Planejamento Estratégico' },
];

const createModal = () => {
  // Cria a div modal
  const modal = document.createElement('div');
  modal.id = 'background-moldalAddPostIt';

  // Adiciona o conteúdo ao modal
  modal.innerHTML = `
    <div id='container-moldalAddPostIt'>
      <div id="container-icon-moldalAddPostIt">
        <span id="icon-moldalAddPostIt"></span>
      </div>
      <form id='form-modalAddPostIt'>
        <div class='div-content-moldalAddPostIt'>
          <label for="title">Seção</label>
          <select
            name="title"
            required
          >
            ${options.map((option) => `
              <option key=${option.value} value=${option.value}>
                ${option.label}
              </option>`).join('')}
          </select>
        </div>
        <div class='div-content-moldalAddPostIt'>
          <label for="description">Descrição</label>
          <textarea
            name="description"
            required
            id='textarea-modalAddPostIt'
          ></textarea>
        </div>
        <button id='btn-modalAddPostIt'>Salvar</button>
      </form>
    </div>`;

  // Adiciona um evento de clique para fechar o modal
  modal.querySelector('#btn-modalAddPostIt').addEventListener('click', () => {
    document.body.removeChild(modal);
  });

  // Adiciona o modal ao corpo do documento
  document.body.appendChild(modal);
};


export { createModal };
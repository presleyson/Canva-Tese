import { initialTexts } from "./strings";

export default function atualizaDisplay(postIts) {

  function updateDisplay(title, displayValue) {
    const element = document.getElementById(`text-canva-area-${title}`);
    if (element) {
      if (displayValue === 'none' && postIts.filter(postIt => postIt.title === title).length === 0) {
        element.innerText = initialTexts[title];
      } else {
        element.style.display = displayValue;
      }
    }
  }

  postIts.forEach((postIt) => {
    switch (postIt.title) {
      case 'Principais Parceiros':
        updateDisplay('principais-parceiros', postIt.title === 'Principais Parceiros' ? 'none' : 'block');
        break;
      case 'Recursos Técnicos':
        updateDisplay('recursos-tecnicos', postIt.title === 'Recursos Técnicos' ? 'none' : 'block');
        break;
      case 'Recursos Financeiros':
        updateDisplay('recursos-financeiros', postIt.title === 'Recursos Financeiros' ? 'none' : 'block');
        break;
      case 'Idéias Selecionadas':
        updateDisplay('ideias-selecionadas', postIt.title === 'Idéias Selecionadas' ? 'none' : 'block');
        break;
      case 'Geração de idéias':
        updateDisplay('geracao-ideias', postIt.title === 'Geração de idéias' ? 'none' : 'block');
        break;
      case 'Mercado':
        updateDisplay('mercado', postIt.title === 'Mercado' ? 'none' : 'block');
        break;
      case 'Problema':
        updateDisplay('problema1', postIt.title === 'Problema' ? 'none' : 'block');
        updateDisplay('problema2', postIt.title === 'Problema' ? 'none' : 'block');
        break;
      case 'Resultados':
        updateDisplay('resultados', postIt.title === 'Resultados' ? 'none' : 'block');
        break;
      case 'Planejamento Estratégico':
        updateDisplay('planejamento-estrategico1', postIt.title === 'Planejamento Estratégico' ? 'none' : 'block');
        updateDisplay('planejamento-estrategico2', postIt.title === 'Planejamento Estratégico' ? 'none' : 'block');
        break;
      default:
        break;
    }
  });
}
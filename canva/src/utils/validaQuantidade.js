export default function validaQuantidade(title, postIts) {
  // Define os limites para cada título
  const limites = {
    'Recursos Técnicos': 6,
    'Principais Parceiros': 6,
    'Recursos Financeiros': 6,
    'Idéias Selecionadas': 6,
    'Geração de idéias': 6,
    'Mercado': 2,
    'Problema': 2,
    'Resultados': 6,
    'Planejamento Estratégico': 6,
  };

  if (title in limites && postIts.filter(item => item.title === title).length >= limites[title]) {
    alert(`Você atingiu o limite de ${limites[title]} post-its em "${title}".`);
    return true;
  }

  return false;
}

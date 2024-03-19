export default function validaQuantidade(title, postIts, editId) {
  // Define os limites para cada título
  const limites = {
    'Recursos Técnicos': 5,
    'Principais Parceiros': 5,
    'Recursos Financeiros': 5,
    'Idéias Selecionadas': 5,
    'Geração de ideias': 5,
    'Mercado': 2,
    'Problema': 2,
    'Resultados': 6,
    'Planejamento Estratégico': 6,
  };

  // Verifica se o post-it sendo editado já existe
  const postItBeingEdited = postIts.find(postIt => postIt.id === editId);

  if (!postItBeingEdited && title in limites && postIts.filter(item => item.title === title).length >= limites[title]) {
    alert(`Você atingiu o limite de ${limites[title]} post-its em "${title}".`);
    return true;
  }

  return false;
}

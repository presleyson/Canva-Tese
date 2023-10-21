import { useEffect, useState } from 'react';
import PostIt from '../components/post-it';
import * as uuid from 'uuid';
import validaQuantidade from '../utils/validaQuantidade';
import ModalAddPostIt from '../components/modal';
import './style.css';
import PopUp from '../components/pop-up';

export default function Home() {
  const [postIts, setPostIts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [postToDeleteId, setPostToDeleteId] = useState(null);

  const [initialTexts, setInitialTexts] = useState({
    'Principais Parceiros': 'Identifique os principais colaboradores, agentes, departamentos ou sócios.',
    'Recursos Técnicos': 'Liste as instituições ou organizações que podem fornecer suporte técnico, como universidades, parques tecnológicos, ou fornecedores.',
    'Recursos Financeiros': 'Enumere potenciais fontes de financiamento, como investidores privados, capital de risco, subsídios governamentais, etc.',
    'Idéias Selecionadas': 'Liste aqui as ideias selecionadas mais viáveis.',
    'Geração de idéias': 'Insira aqui idéias vindas de pesquisas de mercado, brainstorming, etc.',
    'Mercado': 'Insira aqui o mercado alvo.',
    'Problema': 'Identifique os principais problemas que sua empresa busca resolver. Explique como esses problemas afetam os clientes ou o mercado.',
    'Resultados': 'Apresente os resultados ou objetivos que sua empresa espera alcançar.',
    'Planejamento Estratégico': 'Apresente os resultados ou objetivos que sua empresa espera alcançar. Destaque metas, prazos e ações-chave.',
  });


  function addPostIt(title, text) {
    // Verifica se o post-it sendo editado já existe
    const postItExists = postIts.some(postIt => postIt.id === editId);

    if (!validaQuantidade(title, postIts, editId) || postItExists) {
      if (editId !== null) {
        const updatedPostIts = postIts.map(postIt =>
          postIt.id === editId ? { ...postIt, title, text } : postIt
        );
        setPostIts(updatedPostIts);
        setEditId(null);
      } else {
        setPostIts([...postIts, { id: uuid.v4(), title, text }]);
      }
      setTitle('');
      setDescription('');
    }
  }


  function editModal(title, text, id) {
    setOpen(true);
    setTitle(title);
    setDescription(text);
    setEditId(id);
  }

  function deletePostIt(id) {
    setPostToDeleteId(id);
    setDeleteConfirmationOpen(true);
  }

  function confirmDelete() {
    const idToDelete = postToDeleteId;
    const updatedPostIts = postIts.filter((postIt) => postIt.id !== idToDelete);
    setPostIts(updatedPostIts);

    setPostToDeleteId(null);
    setDeleteConfirmationOpen(false);
  }

  function openModal() {
    setOpen(true);
    setTitle('');
    setDescription('');
  }

  function closeModal() {
    setOpen(false);
  }

  useEffect(() => {
    function updateDisplay(title, displayValue) {
      const element = document.getElementById(`text-canva-area-${title}`);
      if (element) {
        if (displayValue === 'none' && postIts.filter(postIt => postIt.title === title).length === 0) {
          // Se a área estiver vazia, exiba a dica de texto inicial
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
  }, [postIts]);

  return (
    <>
      {open && (
        <ModalAddPostIt
          open={open}
          close={closeModal}
          setArray={addPostIt}
          title={title}
          description={description}
          editId={editId}
        />
      )}
      {deleteConfirmationOpen && (
        <PopUp
          open={deleteConfirmationOpen}
          message="Tem certeza de que deseja excluir este post-it?"
          close={() => setDeleteConfirmationOpen(false)}
          confirm="Confirmar"
          cancel="Cancelar"
          confirmFnct={confirmDelete}
        />
      )}

      <div id='canva-container-main'>
        <div id='canva-container-top'>
          <div className='canva-area'>
            <p className='title-canva-area'>Principais Parceiros</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Principais Parceiros') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Principais Parceiros').length === 0 && (
                  <p className='text-canva-area' id='text-canva-area-principais-parceiros'>{initialTexts['Principais Parceiros']}</p>
                )
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Recursos Técnicos</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Recursos Técnicos') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Recursos Técnicos').length === 0 && (
                  <p className='text-canva-area' id='text-canva-area-recursos-tecnicos'>{initialTexts['Recursos Técnicos']}</p>
                )
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Recursos Financeiros</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Recursos Financeiros') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Recursos Financeiros').length === 0 && (
                  <p className='text-canva-area' id='text-canva-area-recursos-financeiros'>{initialTexts['Recursos Financeiros']}</p>
                )
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Idéias Selecionadas</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Idéias Selecionadas') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Idéias Selecionadas').length === 0 && (
                  <p className='text-canva-area' id='text-canva-area-ideias-selecionadas'>{initialTexts['Idéias Selecionadas']}</p>
                )
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Geração de idéias</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Geração de idéias') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Geração de idéias').length === 0 && (
                  <p className='text-canva-area' id='text-canva-area-geracao-ideias'>{initialTexts['Geração de idéias']}</p>
                )
              }
            </div>
          </div>
          <div id='canva-container-right'>
            <div className='canva-area canva-area-right'>
              <p className='title-canva-area'>Mercado</p>
              <div className='postIt-area'>
                {
                  postIts.map((postIt) => {
                    if (postIt.title === 'Mercado') {
                      return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                    }
                    return null;
                  })
                }
                {
                  postIts.filter(postIt => postIt.title === 'Mercado').length === 0 && (
                    <p className='text-canva-area' id='text-canva-area-mercado'>{initialTexts['Mercado']}</p>
                  )
                }
              </div>
            </div>
            <div className='canva-area canva-area-right'>
              <p className='title-canva-area'>Problema</p>
              <div className='postIt-area'>
                {
                  postIts.map((postIt) => {
                    if (postIt.title === 'Problema') {
                      return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                    }
                    return null;
                  })
                }
                {
                  postIts.filter(postIt => postIt.title === 'Problema').length === 0 && (
                    <p className='text-canva-area text-canva-area-first-paragraph' id='text-canva-area-problema1'>{initialTexts['Problema']}</p>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        <div id='canva-container-bottom'>
          <div className='canva-area'>
            <p className='title-canva-area title-canva-area-bottom'>Resultados</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Resultados') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Resultados').length === 0 && (
                  <p className='text-canva-area text-canva-area-bottom' id='text-canva-area-resultados'>{initialTexts['Resultados']}</p>
                )
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area title-canva-area-bottom'>Planejamento Estratégico</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Planejamento Estratégico') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
              {
                postIts.filter(postIt => postIt.title === 'Planejamento Estratégico').length === 0 && (
                  <p className='text-canva-area text-canva-area-first-paragraph text-canva-area-bottom' id='text-canva-area-planejamento-estrategico1'>{initialTexts['Planejamento Estratégico']}</p>
                )
              }
            </div>
          </div>
        </div>
        <button id='button-canva' onClick={e => openModal()}>Adicionar Post-it</button>
      </div>
    </>
  );
}

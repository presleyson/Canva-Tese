import { useEffect, useState } from 'react';
import PostIt from '../components/post-it';
import * as uuid from 'uuid';
import validaQuantidade from '../utils/validaQuantidade';
import ModalAddPostIt from '../components/modal';
import './style.css';

export default function Home() {
  const [postIts, setPostIts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [display, setDisplay] = useState({
    PP: 'block',
    RT: 'block',
    RF: 'block',
    IS: 'block',
    GI: 'block',
    M: 'block',
    P1: 'block',
    P2: 'block',
    R: 'block',
    PE1: 'block',
    PE2: 'block',
  })

  function addPostIt(title, text) {
    if (!validaQuantidade(title, postIts)) {
      setPostIts([...postIts, { id: uuid.v4(), title, text }]);
    }
  }

  function openModal() {
    setOpen(true);
    setTitle('');
    setDescription('');
  }

  function closeModal() {
    setOpen(false);
  }

  function editModal(title, text) {
    setOpen(true);
    setTitle(title);
    setDescription(text);
  }

  function deletePostIt(id) {
    const updatedPostIts = postIts.filter((postIt) => postIt.id !== id);
    setPostIts(updatedPostIts);
  }

  useEffect(() => {
    console.log(postIts)
    function updateDisplay(title, displayValue) {
      const element = document.getElementById(`text-canva-area-${title}`);
      if (element) {
        element.style.display = displayValue;
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
      {open && <ModalAddPostIt open={open} close={closeModal} setArray={addPostIt} title={title} description={description} />}
      <div id='canva-container-main'>
        <div id='canva-container-top'>
          <div className='canva-area'>
            <p className='title-canva-area'>Principais Parceiros</p>
            <p className='text-canva-area' id='text-canva-area-principais-parceiros'>Identifique os principais colaboradores, agentes, departamentos ou sócios.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Principais Parceiros') {
                    return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })
              }
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Recursos Técnicos</p>
            <p className='text-canva-area' id='text-canva-area-recursos-tecnicos'>Liste as instituições ou organizações que podem fornecer suporte técnico, como universidades, parques tecnológicos, ou fornecedores.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Recursos Técnicos') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Recursos Financeiros</p>
            <p className='text-canva-area' id='text-canva-area-recursos-financeiros'>Enumere potenciais fontes de financiamento, como investidores privados, capital de risco, subsídios governamentais, etc.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Recursos Financeiros') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Idéias Selecionadas</p>
            <p className='text-canva-area' id='text-canva-area-ideias-selecionadas'>Liste aqui as ideias selecionadas mais viáveis.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Idéias Selecionadas') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area'>Geração de idéias</p>
            <p className='text-canva-area' id='text-canva-area-geracao-ideias'>Insira aqui idéias vindas de pesquisas de mercado, brainstorming, etc.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Geração de idéias') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
          <div id='canva-container-right'>
            <div className='canva-area canva-area-right'>
              <p className='title-canva-area'>Mercado</p>
              <p className='text-canva-area' id='text-canva-area-mercado'>Insira aqui o mercado alvo.</p>
              <div className='postIt-area'>
                {
                  postIts.map((postIt) => {
                    if (postIt.title === 'Mercado') {
                      return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                    }
                    return null;
                  })}
              </div>
            </div>
            <div className='canva-area canva-area-right'>
              <p className='title-canva-area'>Problema</p>
              <p className='text-canva-area text-canva-area-first-paragraph' id='text-canva-area-problema1'>Identifique os principais problemas que sua empresa busca resolver.</p>
              <p className='text-canva-area' id='text-canva-area-problema2'>Explique como esses problemas afetam os clientes ou o mercado.</p>
              <div className='postIt-area'>
                {
                  postIts.map((postIt) => {
                    if (postIt.title === 'Problema') {
                      return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                    }
                    return null;
                  })}
              </div>
            </div>
          </div>
        </div>
        <div id='canva-container-bottom'>
          <div className='canva-area'>
            <p className='title-canva-area title-canva-area-bottom'>Resultados</p>
            <p className='text-canva-area text-canva-area-bottom' id='text-canva-area-resultados'>Apresente os resultados ou objetivos que sua empresa espera alcançar.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Resultados') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
          <div className='canva-area'>
            <p className='title-canva-area title-canva-area-bottom'>Planejamento Estratégico</p>
            <p className='text-canva-area text-canva-area-first-paragraph text-canva-area-bottom' id='text-canva-area-planejamento-estrategico1'>Apresente os resultados ou objetivos que sua empresa espera alcançar.</p>
            <p className='text-canva-area text-canva-area-bottom' id='text-canva-area-planejamento-estrategico2'>Destaque metas, prazos e ações-chave.</p>
            <div className='postIt-area'>
              {
                postIts.map((postIt) => {
                  if (postIt.title === 'Planejamento Estratégico') {
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} deletePostIt={e => deletePostIt(postIt.id)} />
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
        <button id='button-canva' onClick={e => openModal()}>Adicionar Post-it</button>
      </div>
    </>
  );
}

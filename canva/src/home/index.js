import { useState } from 'react';
import PostIt from '../components/post-it';
import validaQuantidade from '../utils/validaQuantidade';
import ModalAddPostIt from '../components/modal';
import './style.css';

export default function Home() {

  const [postIts, setPostIts] = useState([{}]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function addPostIt(title, text) {
    const existingPostItIndex = postIts.findIndex((postIt) => postIt.title === title && postIt.text === text);

    if (existingPostItIndex !== -1) {
      // Se já existe um post-it com o mesmo título, remova-o antes de adicionar a versão atualizada
      const updatedPostIts = [...postIts];
      updatedPostIts.splice(existingPostItIndex, 1); // Remove o post-it original
      setPostIts([...updatedPostIts, { title, text }]); // Adiciona a versão atualizada
    } else {
      // Caso contrário, adicione um novo post-it
      if (!validaQuantidade(title, postIts)) {
        setPostIts([...postIts, { title, text }]);
      }
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

  function deletePostIt(title) {
    const updatedPostIts = postIts.filter((postIt) => postIt.title !== title && postIt.text !== description);
    setPostIts(updatedPostIts);
  }

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
                    document.getElementById('text-canva-area-principais-parceiros').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-recursos-tecnicos').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-recursos-financeiros').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-ideias-selecionadas').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-geracao-ideias').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                      document.getElementById('text-canva-area-mercado').style.display = 'none'
                      return (<><PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} /> <button onClick={() => deletePostIt(postIt.title)}>Apagar</button></>)
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
                      document.getElementById('text-canva-area-problema1').style.display = 'none'
                      document.getElementById('text-canva-area-problema2').style.display = 'none'
                      return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-resultados').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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
                    document.getElementById('text-canva-area-planejamento-estrategico1').style.display = 'none'
                    document.getElementById('text-canva-area-planejamento-estrategico2').style.display = 'none'
                    return <PostIt key={postIt.text} text={postIt.text} open={e => editModal(postIt.title, postIt.text)} />
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

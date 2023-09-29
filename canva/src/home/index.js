import { useState } from 'react';
import PostIt from '../post-it';
import validaQuantidade from '../utils/validaQuantidade';
import './style.css';

export default function Home() {

  const [postIts, addPostIts] = useState([{}]);

  function addPostIt(title, text) {
    if (!validaQuantidade(title, postIts)) {
      addPostIts([...postIts, { title, text }]);
    }
  }

  return (
    <div id='canva-container-main'>
      <div id='canva-container-top'>
        <div className='canva-area'>
          <p className='title-canva-area'>Principais Parceiros</p>
          <p className='text-canva-area' id='text-canva-area-principais-parceiros'>Identifique os principais colaboradores, agentes, departamentos ou sócios.</p>
          <div className='postIt-area'>
            {
              postIts.map((postIt) => {
                if (postIt.title == 'Principais Parceiros') {
                  document.getElementById('text-canva-area-principais-parceiros').style.display = 'none'
                  return <PostIt text={postIt.text} />
                }
              })}
          </div>
        </div>
        <div className='canva-area'>
          <p className='title-canva-area'>Recursos Técnicos</p>
          <p className='text-canva-area' id='text-canva-area-recursos-tecnicos'>Liste as instituições ou organizações que podem fornecer suporte técnico, como universidades, parques tecnológicos, ou fornecedores.</p>
          <div className='postIt-area'>
            {
              postIts.map((postIt) => {
                if (postIt.title == 'Recursos Técnicos') {
                  document.getElementById('text-canva-area-recursos-tecnicos').style.display = 'none'
                  return <PostIt text={postIt.text} />
                }
              })}
          </div>
        </div>
        <div className='canva-area'>
          <p className='title-canva-area'>Recursos Financeiros</p>
          <p className='text-canva-area' id='text-canva-area-recursos-financeiros'>Enumere potenciais fontes de financiamento, como investidores privados, capital de risco, subsídios governamentais, etc.</p>
          <div className='postIt-area'>
            {
              postIts.map((postIt) => {
                if (postIt.title == 'Recursos Financeiros') {
                  document.getElementById('text-canva-area-recursos-financeiros').style.display = 'none'
                  return <PostIt text={postIt.text} />
                }
              })}
          </div>
        </div>
        <div className='canva-area'>
          <p className='title-canva-area'>Idéias Selecionadas</p>
          <p className='text-canva-area' id='text-canva-area-ideias-selecionadas'>Liste aqui as ideias selecionadas mais viáveis.</p>
          <div className='postIt-area'>
            {
              postIts.map((postIt) => {
                if (postIt.title == 'Idéias Selecionadas') {
                  document.getElementById('text-canva-area-ideias-selecionadas').style.display = 'none'
                  return <PostIt text={postIt.text} />
                }
              })}
          </div>
        </div>
        <div className='canva-area'>
          <p className='title-canva-area'>Geração de idéias</p>
          <p className='text-canva-area' id='text-canva-area-geracao-ideias'>Insira aqui idéias vindas de pesquisas de mercado, brainstorming, etc.</p>
          <div className='postIt-area'>
            {
              postIts.map((postIt) => {
                if (postIt.title == 'Geração de idéias') {
                  document.getElementById('text-canva-area-geracao-ideias').style.display = 'none'
                  return <PostIt text={postIt.text} />
                }
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
                  if (postIt.title == 'Mercado') {
                    document.getElementById('text-canva-area-mercado').style.display = 'none'
                    return <PostIt text={postIt.text} />
                  }
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
                  if (postIt.title == 'Problema') {
                    document.getElementById('text-canva-area-problema1').style.display = 'none'
                    document.getElementById('text-canva-area-problema2').style.display = 'none'
                    return <PostIt text={postIt.text} />
                  }
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
                  if (postIt.title == 'Resultados') {
                    document.getElementById('text-canva-area-resultados').style.display = 'none'
                    return <PostIt text={postIt.text} />
                  }
                })}
            </div>
        </div>
        <div className='canva-area'>
          <p className='title-canva-area title-canva-area-bottom'>Planejamento Estratégico</p>
          <p className='text-canva-area text-canva-area-first-paragraph text-canva-area-bottom'>Apresente os resultados ou objetivos que sua empresa espera alcançar.</p>
          <p className='text-canva-area text-canva-area-bottom'>Destaque metas, prazos e ações-chave.</p>
          <div className='postIt-area'></div>
        </div>
      </div>
      <button id='button-canva' onClick={e => addPostIt('Recursos Técnicos', 'teste')}>Adicionar Post-it</button>
    </div>
  );
}

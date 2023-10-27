// Estilos e Funções
import './style.css'

export default function CanvaBottom({ postIts, title, initialTexts, children, id }) {
  return (
    <div className='canva-area'>
      <p className='title-canva-area title-canva-area-bottom'>{title}</p>
      {
        postIts.filter(postIt => postIt.title === title).length === 0 && (
          <p className='text-canva-area text-canva-area-bottom' id={id}>{initialTexts[title]}</p>
        )
      }
      {children}
    </div>
  );
}
// Estilos e Funções
import './style.css'

export default function CanvaArea({ postIts, title, initialTexts, children, id }) {
  return (
    <div className='canva-area'>
      <p className='title-canva-area'>{title}</p>
      {
        postIts.filter(postIt => postIt.title === title).length === 0 && (
          <p className='text-canva-area' id={id}>{initialTexts[title]}</p>
        )
      }
      {children}
    </div>
  );
}
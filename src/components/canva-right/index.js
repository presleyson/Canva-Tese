// Estilos e Funções
import './style.css'

export default function CanvaRight({ postIts, title, initialTexts, id, children }) {
  return (
    <div className='canva-area canva-area-right'>
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
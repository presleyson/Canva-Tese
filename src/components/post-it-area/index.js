// Componentes
import PostIt from '../post-it';
// Estilos e Funções
import './style.css'

export default function PostItArea({ postIts, editModal, deletePostIt, title }) {
  return (
    <div className='postIt-area'>
      {
        postIts.map((postIt) => {
          if (postIt.title === title) {
            return <PostIt key={postIt.id} text={postIt.text} open={e => editModal(postIt.title, postIt.text, postIt.id)} deletePostIt={e => deletePostIt(postIt.id)} />
          }
          return null;
        })
      }
    </div>
  );
}
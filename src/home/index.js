// Bibliotecas
import { useEffect, useState } from 'react';
import * as uuid from 'uuid';
// Componentes
import PostItArea from '../components/post-it-area';
import CanvaArea from '../components/canva-left';
import CanvaRight from '../components/canva-right';
import CanvaBottom from '../components/canva-bottom';
import ModalAddPostIt from '../components/modal';
import PopUp from '../components/pop-up';
// Estilos e Funções
import { initialTexts, leftTopArea, rightTopArea, bottomArea } from '../utils/strings';
import validaQuantidade from '../utils/validaQuantidade';
import atualizaDisplay from '../utils/atualizaDisplay';
import './style.css';


export default function Home() {
  const [postIts, setPostIts] = useState([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [postToDeleteId, setPostToDeleteId] = useState(null);

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
    atualizaDisplay(postIts);
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
          {leftTopArea.titles.map((title, index) => {
            return (
              <CanvaArea postIts={postIts} title={title} initialTexts={initialTexts} id={leftTopArea.id[index]}>
                <PostItArea postIts={postIts} editModal={editModal} deletePostIt={deletePostIt} title={title} />
              </CanvaArea>
            );
          })}
          <div id='canva-container-right'>
            {rightTopArea.titles.map((title, index) => {
              return (
                <CanvaRight postIts={postIts} title={title} initialTexts={initialTexts} id={rightTopArea.id[index]}>
                  <PostItArea postIts={postIts} editModal={editModal} deletePostIt={deletePostIt} title={title} />
                </CanvaRight>
              );
            })}
          </div>
        </div>
        <div id='canva-container-bottom'>
          {bottomArea.titles.map((title, index) => {
            return (
              <CanvaBottom postIts={postIts} title={title} initialTexts={initialTexts} id={bottomArea.id[index]}>
                <PostItArea postIts={postIts} editModal={editModal} deletePostIt={deletePostIt} title={title} />
              </CanvaBottom>
            );
          })}
        </div>
        <button id='button-canva' onClick={e => openModal()}>Adicionar Post-it</button>
      </div>
    </>
  );
}

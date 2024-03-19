// Bibliotecas
import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react'
// Componentes
import PopUp from '../pop-up';
import './style.css'

export default function ModalAddPostIt({ open, close, setArray, title, description, editId }) {
  const [form, setForm] = useState({
    title: title || '',
    description: description || '',
    options: [
      { value: '', label: '' },
      { value: 'Mercado', label: 'Mercado' },
      { value: 'Problema', label: 'Problema' },
      { value: 'Geração de ideias', label: 'Geração de idéias' },
      { value: 'Ideias Selecionadas', label: 'Idéias Selecionadas' },
      { value: 'Recursos Financeiros', label: 'Recursos Financeiros' },
      { value: 'Recursos Técnicos', label: 'Recursos Técnicos' },
      { value: 'Principais Parceiros', label: 'Principais Parceiros' },
      { value: 'Resultados', label: 'Resultados' },
      { value: 'Planejamento Estratégico', label: 'Planejamento Estratégico' },
    ],
  });
  const [editConfirmationOpen, setEditConfirmationOpen] = useState(false);

  const onChangeTitle = (event) => {
    setForm({
      ...form,
      title: event.target.value,
    });
  }

  const onChangeDescription = (event) => {
    setForm({
      ...form,
      description: event.target.value,
    });
  }

  const sendForm = (event) => {
    event.preventDefault();

    if (editId !== null) {
      setEditConfirmationOpen(true);
    } else {
      setArray(form.title, form.description);
      close();
      setForm({ description: '', title: '' });
    }
  };

  const confirmEdit = () => {
    if (editId !== null) {
      setArray(form.title, form.description);
      close();
      setForm({ description: '', title: '' });
      setEditConfirmationOpen(false);
    }
  };



  return (
    <Dialog open={open}>
      {editConfirmationOpen && (
        <PopUp
          open={editConfirmationOpen}
          message="Tem certeza de que deseja editar este post-it?"
          close={() => setEditConfirmationOpen(false)}
          confirm="Confirmar"
          cancel="Cancelar"
          confirmFnct={confirmEdit}
        />
      )}

      <DialogContent>
        <div id='background-moldalAddPostIt'>
          <div id='container-moldalAddPostIt'>
            <div id="container-icon-moldalAddPostIt">
              <span id="icon-moldalAddPostIt" onClick={close}>
                <RxCross1 />
              </span>
            </div>
            <form id='form-modalAddPostIt'>
              <div className='div-content-moldalAddPostIt'>
                <label htmlFor="title">Seção</label>
                <select
                  name="title"
                  required
                  value={form.title}
                  onChange={onChangeTitle}
                >
                  {form.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='div-content-moldalAddPostIt'>
                <label htmlFor="description">Descrição</label>
                <textarea
                  name="description"
                  required
                  id='textarea-modalAddPostIt'
                  value={form.description}
                  onChange={onChangeDescription}
                />
              </div>
              <button onClick={sendForm} id='btn-modalAddPostIt'>Salvar</button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

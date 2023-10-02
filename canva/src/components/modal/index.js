//bibliotecas
import { Dialog, DialogContent } from '@radix-ui/react-dialog'
import { RxCross1 } from 'react-icons/rx';
import { useState } from 'react'
import './style.css'

export default function ModalAddPostIt({ open, close, setArray, title, description }) {
  const [form, setForm] = useState({
    title: title || '',
    description: description || '',
    options: [
      { value: '', label: '' },
      { value: 'Mercado', label: 'Mercado' },
      { value: 'Problema', label: 'Problema' },
      { value: 'Geração de idéias', label: 'Geração de idéias' },
      { value: 'Idéias Selecionadas', label: 'Idéias Selecionadas' },
      { value: 'Recursos Financeiros', label: 'Recursos Financeiros' },
      { value: 'Recursos Técnicos', label: 'Recursos Técnicos' },
      { value: 'Principais Parceiros', label: 'Principais Parceiros' },
      { value: 'Resultados', label: 'Resultados' },
      { value: 'Planejamento Estratégico', label: 'Planejamento Estratégico' },
    ],
  });

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
    setArray(form.title, form.description);
    close();
  }

  return (
    <Dialog open={open}>
      <DialogContent>
        <div id='background-moldalAddPostIt'>
          <div id='container-moldalAddPostIt'>
            <div id="container-icon-moldalAddPostIt">
              <span id="icon-moldalAddPostIt" onClick={close}>
                <RxCross1 />
              </span>
            </div>
            <form onSubmit={sendForm} id='form-modalAddPostIt'>
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
              <button id='btn-modalAddPostIt'>Adicionar</button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
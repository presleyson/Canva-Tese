import React, { useEffect, useState } from 'react';
import './style.css';

export default function PostIt({ text, open, deletePostIt }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [message, setMessage] = useState(text);

  useEffect(() => {
    setMessage(text);
  }, [text]);

  return (
    <div id="postIt-main-container">
      <div
        id='postIt-container'
        onClick={open}
        onMouseEnter={() => {
          setIsMouseOver(true);
          setMessage('Editar');
        }}
        onMouseLeave={() => {
          setIsMouseOver(false);
          setMessage(text);
        }}
      >
        <p id='postIt-content'>{message}</p>
      </div>
      <button
        id='btn-delete-postIt'
        className={isMouseOver ? 'visible' : 'hidden'} // Adicionei classes para controle de visibilidade
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
        onClick={deletePostIt}
      >
        Apagar
      </button>
    </div>
  );
}

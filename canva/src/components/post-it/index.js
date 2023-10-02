import './style.css';

export default function PostIt({ text, open }) {
  return (
    <div id='postIt-container' onClick={open}>
      <p id='postIt-content'>{text}</p>
    </div>
  );
}
import './style.css';

export default function PostIt({ text }) {
  return (
    <div id='postIt-container'>
      <p id='postIt-content'>{text}</p>
    </div>
  );
}
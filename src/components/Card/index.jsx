import './styles.css';

export default function Card({ title, image, description }) {
  return (
    <a href='#' target='_blank' rel="noopener noreferrer" className='card'>
      <span className='card-title'>{title}</span>
      <img className='card-image' src={image} alt="Descrição da imagem" />
      <p>{description}</p>
    </a>
  )
};
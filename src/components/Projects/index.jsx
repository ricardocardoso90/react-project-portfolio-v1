import './styles.css';
import Card from '../Card';
import { CardsInfos } from '../../utils/cards-infos';

export default function Projects() {
  return (
    <div className='projects'>
      <span className='projects-title'>[Projetos]</span>

      <div className='projects-menus'>
        <span>React</span>
        <span>React Native</span>
        <span>Node</span>
      </div>

      <div className='projects-list'>
        {CardsInfos.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
};
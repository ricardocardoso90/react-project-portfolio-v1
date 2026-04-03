import './styles.css';
import Card from '../Card';
import { useState } from 'react';
import { CardsInfos } from '../../utils/cards-infos';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? CardsInfos
      : CardsInfos.filter((card) => card.category === filter);

  return (
    <div className='projects'>
      <span className='projects-title'>[Projetos]</span>

      <div className='projects-menus'>
        <span
          onClick={() => setFilter('All')}
          className={filter === 'All' ? 'active' : ''}
        >
          Todos
        </span>
        <span
          onClick={() => setFilter('React')}
          className={filter === 'React' ? 'active' : ''}
        >React
        </span>
        <span
          onClick={() => setFilter('React Native')}
          className={filter === 'React Native' ? 'active' : ''}
        >
          React Native
        </span>
        <span
          onClick={() => setFilter('Node')}
          className={filter === 'Node' ? 'active' : ''}
        >
          Node
        </span>
      </div>

      <div className='projects-list'>
        {filteredProjects.map((card, index) => (
          <Card
            key={index}
            link={card.link}
            title={card.title}
            image={card.image}
            description={card.description}
          />
        ))}

        {filteredProjects.length === 0 && (
          <p>Nenhum projeto encontrado.</p>
        )}
      </div>

      <div className='projects-buttons'>
        <span>Voltar</span>
        <span>React</span>
      </div>
    </div>
  )
};
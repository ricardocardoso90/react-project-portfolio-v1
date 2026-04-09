import './styles.css';
import { useState, useEffect } from 'react';

import Card from '../Card';
import { CardsInfos } from '../../utils/cards-infos';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shuffledCards, setShuffledCards] = useState([]);

  const itemsPerPage = 6;

  const filteredProjects =
    filter === 'All'
      ? shuffledCards
      : shuffledCards.filter((card) => card.category === filter);

  const visibleProjects = filteredProjects.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  function shuffleArray(array) {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    };

    return newArray;
  };

  useEffect(() => {
    setCurrentIndex(0);
  }, [filter]);

  useEffect(() => {
    setShuffledCards(shuffleArray(CardsInfos));
  }, []);

  return (
    <div className='projects'>
      <span
        className='projects-title'>
        [Projetos]
        {/* {filteredProjects.length} */}
      </span>

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
        >
          React
        </span>

        <span
          onClick={() => setFilter('JavaScript')}
          className={filter === 'JavaScript' ? 'active' : ''}
        >
          JavaScript
        </span>

        <span
          onClick={() => setFilter('Node')}
          className={filter === 'Node' ? 'active' : ''}
        >
          Node
        </span>

        <span
          onClick={() => setFilter('React Native')}
          className={filter === 'React Native' ? 'active' : ''}
        >
          React Native
        </span>

      </div>

      <div className='projects-list'>
        {visibleProjects.map((card, index) => (
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
        <span
          style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - itemsPerPage)}
        >
          ← Voltar
        </span>

        <span
          style={{ opacity: currentIndex + itemsPerPage >= filteredProjects.length ? 0.3 : 1 }}
          onClick={() => currentIndex + itemsPerPage < filteredProjects.length && setCurrentIndex(currentIndex + itemsPerPage)}
        >
          Próximo →
        </span>
      </div>
    </div>
  );
}


// import './styles.css';
// import { useState, useEffect } from 'react';

// import Card from '../Card';
// import { CardsInfos } from '../../utils/cards-infos';

// /**
//  * Componente principal de Projetos.
//  * Responsável por exibir uma lista filtrável, embaralhada e paginada de cards.
//  */
// export default function Projects() {
//   // Estados para controlar o filtro atual, o índice da página e a lista embaralhada
//   const [filter, setFilter] = useState('All');
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [shuffledCards, setShuffledCards] = useState([]);

//   const itemsPerPage = 6; // Define quantos cards aparecem por vez

//   /**
//    * Lógica de Filtragem:
//    * Cria uma nova lista baseada na categoria selecionada.
//    * Se for 'All', usa todos os cards embaralhados.
//    */
//   const filteredProjects =
//     filter === 'All'
//       ? shuffledCards
//       : shuffledCards.filter((card) => card.category === filter);

//   /**
//    * Lógica de Paginação:
//    * Extrai apenas o pedaço (slice) da lista filtrada que deve ser exibido
//    * na página atual, baseando-se no currentIndex.
//    */
//   const visibleProjects = filteredProjects.slice(
//     currentIndex,
//     currentIndex + itemsPerPage
//   );

//   /**
//    * Função Utilitária: shuffleArray
//    * Implementa o algoritmo de Fisher-Yates para misturar os itens do array
//    * de forma aleatória sem modificar o array original.
//    */
//   function shuffleArray(array) {
//     const newArray = [...array];

//     for (let i = newArray.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
//     };

//     return newArray;
//   };

//   /**
//    * Hook useEffect (Monitor de Filtro):
//    * Sempre que o usuário troca a categoria (filtro), o índice da página
//    * volta para 0 para que a visualização comece do início da nova lista.
//    */
//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [filter]);

//   /**
//    * Hook useEffect (Inicialização):
//    * Executa apenas uma vez quando o componente é montado.
//    * Embaralha a lista bruta de informações (CardsInfos) e salva no estado.
//    */
//   useEffect(() => {
//     setShuffledCards(shuffleArray(CardsInfos));
//   }, []);

//   return (
//     <div className='projects'>
//       <span className='projects-title'>[Projetos] {filteredProjects.length}</span>

//       {/* Menus de Filtro: Cada span altera o estado 'filter' ao ser clicado */}
//       <div className='projects-menus'>
//         <span
//           onClick={() => setFilter('All')}
//           className={filter === 'All' ? 'active' : ''}
//         >
//           Todos
//         </span>

//         <span
//           onClick={() => setFilter('React')}
//           className={filter === 'React' ? 'active' : ''}
//         >
//           React
//         </span>

//         <span
//           onClick={() => setFilter('JavaScript')}
//           className={filter === 'JavaScript' ? 'active' : ''}
//         >
//           JavaScript
//         </span>

//         <span
//           onClick={() => setFilter('Node')}
//           className={filter === 'Node' ? 'active' : ''}
//         >
//           Node
//         </span>

//         <span
//           onClick={() => setFilter('React Native')}
//           className={filter === 'React Native' ? 'active' : ''}
//         >
//           React Native
//         </span>
//       </div>

//       {/* Renderização da Lista: Mapeia apenas os projetos visíveis para o componente Card */}
//       <div className='projects-list'>
//         {visibleProjects.map((card, index) => (
//           <Card
//             key={index}
//             link={card.link}
//             title={card.title}
//             image={card.image}
//             description={card.description}
//           />
//         ))}

//         {/* Mensagem de fallback caso a categoria não tenha projetos */}
//         {filteredProjects.length === 0 && (
//           <p>Nenhum projeto encontrado.</p>
//         )}
//       </div>

//       {/* Controles de Navegação: Alteram o currentIndex para mudar a "página" */}
//       <div className='projects-buttons'>
//         <span
//           style={{ opacity: currentIndex === 0 ? 0.3 : 1 }}
//           onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - itemsPerPage)}
//         >
//           ← Voltar
//         </span>

//         <span
//           style={{ opacity: currentIndex + itemsPerPage >= filteredProjects.length ? 0.3 : 1 }}
//           onClick={() => currentIndex + itemsPerPage < filteredProjects.length && setCurrentIndex(currentIndex + itemsPerPage)}
//         >
//           Próximo →
//         </span>
//       </div>
//     </div>
//   );
// }
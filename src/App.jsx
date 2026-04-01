import './App.css';
import './global.css';

import Hero from './components/Hero';
import Projects from './components/Projects';

export default function App() {
  return (
    <main className='section'>
      <Hero />
      <Projects />
    </main>
  );
};
import './App.css';
import './global.css';

import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';

export default function App() {
  return (
    <main className='section'>
      <Hero />
      {/* <Services />
      <Projects />
      <About /> */}
    </main>
  );
};
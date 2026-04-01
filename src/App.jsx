import './App.css';
import './global.css';

import Hero from './components/Hero';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <main className='section'>
        <Hero />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Attractions from './components/Attractions';
import Contact from './components/Contact';
import Reviews from './components/Reviews';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Gallery />
      <Attractions />
      <Reviews />
      <Contact />
      <FloatingButton />
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/Resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
  return (
      <>
        <Sidebar />
        <main className='main'>
          <Home />
          <About />
          <Resume />
          <Portfolio />
          <Testimonials />
          <Contact />
        </main>

      </>
  );
}

export default App;

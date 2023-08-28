
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero'
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stack from './components/Stack';
import Projects from './components/Projects';



const App = () => {
 return (
      <div> 
        
        <Navbar />
        <Hero  />
        <Services  /> 
        <Stack />
        <Projects />
        <Contact />
        <Footer  />
      </div>
    )
  
  
  
}

export default App;


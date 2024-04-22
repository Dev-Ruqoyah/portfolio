import './App.css';
import { Nav} from './component/navbar';
import HeroSection from './component/hero';
import About from './component/about';
import Services from './component/service';
import Project from './component/recent-work';
import Contact from './component/Contact';
import Footer from './component/footer';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AOS from 'aos';
import 'aos/dist/aos.css';

// import {FontawesomeIcon};
// import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  useEffect(() =>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div className="App overflow-x-hidden">
      <Nav></Nav>
	    <HeroSection id="particles" />
      <About></About>
      <Services></Services>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;

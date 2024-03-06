import useScrollSnap from "react-use-scroll-snap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { Home } from './Home';
import { AboutMe } from './AboutMe';
import { Services } from './Services';
import { FAQ } from './FAQ';
import { Contact } from './Contact';

export function App() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
    
    useEffect(() => {
        const handleResize = () => {
          let svh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty('--svh', `${svh}px`);
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return (
        <div 
        ref={scrollRef} >
            <Home />
            <AboutMe />
            <Services />
            <FAQ />
            <Contact />
            <footer
                style={
                    {padding: '1rem',
                     fontSize: '1.4rem'}
                }>site por <Link to='https://linkedin.com/in/CristianValim' target="_blank">cris</Link> e <Link to='https://linkedin.com/in/laissanseverino'>lais</Link></footer>
        </div>
    )
}
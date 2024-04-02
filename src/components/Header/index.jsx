import { useState, useEffect } from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMobileHeader, setIsMobileHeader] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileHeader(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <nav className={isMobileHeader ? "mobile" : "desktop"}>
        <Link className="home" to="/">Início</Link>
        <Link className="sobre-mim" to="/sobre-mim">Sobre Mim</Link>
        <Link className="psicoterapia" to="/sobre-a-psicoterapia">
          {isMobileHeader ? "Psicoterapia" : "Sobre a Psicoterapia"}
        </Link>
        <Link className="faq" to="/faq">{isMobileHeader ? "FAQ" : "Perguntas Frequentes"}</Link>
        <Link className="contato" to="/contato">Contato</Link>
      </nav>
    </Container>
  );
}

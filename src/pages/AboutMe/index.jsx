import { Link } from 'react-router-dom';
import { Container } from './styles';
import logoGreen from '../../assets/logo-green.png';
import aboutMe from '../../assets/aboutMe.png';

export function AboutMe() {

  return (
    <Container id='sobre-mim'>
      <h1 className='title'>sobre mim</h1>
      <div className="flex-wrapper">
        <img className='profile-pic' src={aboutMe} alt="Imagem de Juliana de Alencar com a mão no queixo e olhando para baixo" />
        <div className="about">
          <p>
            Olá! Meu nome é <span>Juliana Barbosa de Alencar</span> <br /> <Link target='_blank' to="http://www.cadastro.cfp.org.br/visualizar.html?profissional=tsOqVp%2FWVCkj4LWJQG%2BXVZPJmYH2OIVS2NfhBvbpWyw%3D">(CRP 12/20214)</Link> e sou <span>psicóloga</span> formada pela Universidade Federal de Santa Catarina (UFSC) e atuo como psicóloga clínica pela abordagem do <span>Construcionismo Social</span>, uma vertente da Terapia Sistêmica.
          </p>
          <p className="ident">
            Sou <span>Mestre em Artes Cênicas</span> pela Universidade do Estado de Santa Catarina (UDESC) e procuro exercer uma clínica atravessada também pela <span>sensibilidade, poética, escuta afetiva, potente, sensibilidade às vulnerabilidades</span>, e principalmente, baseada numa <span>psicologia ética</span>.
            <br />
            Ofereço atendimento online e presencial para adolescentes, jovens e adultos.
          </p>
        </div>
      </div>
      <img className='logo' src={logoGreen} alt="Logo Juliana de Alencar" />
    </Container>
  );
}

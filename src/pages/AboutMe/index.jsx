import { Link } from "react-router-dom";
import { Container } from "./styles";
import logoGreen from "../../assets/logo-green.png";
import aboutMe from "../../assets/aboutMe.png";
import { motion } from "framer-motion";
import { useIsMobileLogo } from "../../hooks/useIsMobileLogo";

export function AboutMe() {
  const isMobileLogo = useIsMobileLogo();
  
  return (
    <Container id="sobre-mim">
      <motion.div
        className="grid-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <h1 className="title">sobre mim</h1>
        <div className="flex-wrapper">
          <img
            className="profile-pic"
            src={aboutMe}
            alt="Imagem de Juliana de Alencar com a mão no queixo e olhando para baixo"
          />
          <div className="about">
            <p>
              Olá! Meu nome é <span>Juliana Barbosa de Alencar</span>{" "}
              <Link
                target="_blank"
                to="http://www.cadastro.cfp.org.br/visualizar.html?profissional=tsOqVp%2FWVCkj4LWJQG%2BXVZPJmYH2OIVS2NfhBvbpWyw%3D"
              >
                (CRP 12/20214)
              </Link>{" "}
              e sou <span>psicóloga</span> formada pela Universidade Federal de
              Santa Catarina (UFSC) e atuo como psicóloga clínica pela abordagem
              do <span>Construcionismo Social</span>, uma vertente da Terapia
              Sistêmica.
            </p>
            <p className="ident">
              Sou <span>Mestre em Artes Cênicas</span> pela Universidade do
              Estado de Santa Catarina (UDESC) e procuro exercer uma clínica
              atravessada também pela{" "}
              <span>
                sensibilidade, poética, escuta afetiva, potente, sensibilidade
                às vulnerabilidades
              </span>
              , e principalmente, baseada numa <span>psicologia ética</span>.
              <br />
              Ofereço atendimento online e presencial para adolescentes, jovens
              e adultos.
            </p>
          </div>
        </div>
        <img style={{display: isMobileLogo ? "none" : "block"}} className="logo" src={logoGreen} alt="Logo Juliana de Alencar" />
      </motion.div>
    </Container>
  );
}

import { Container } from "./styles";
import { FaWhatsapp } from "react-icons/fa";
import logoPurple from "../../assets/logo-purple.png";
import logoPurpleSquare from "../../assets/logo-purple-square.png";
import { useIsMobileLogo } from "../../hooks/useIsMobileLogo";
import { motion } from "framer-motion";

export function Home() {
  const isMobileLogo = useIsMobileLogo();

  return (
    <Container id="home">
      <motion.div
        className="content"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
      >
        <div className="banner top"></div>
        <div className="flex-wrapper">
          <img
            src={isMobileLogo ? logoPurpleSquare : logoPurple}
            alt="Logo Juliana de Alencar"
          />
          <button>
            <a
              href="https://wa.me/5548998468897"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size="3rem" />
              agende uma sessão
            </a>
          </button>
        </div>
        <p>
          Deixe tudo acontecer a você <br />
          Beleza e terror <br />
          Apenas continue <br />
          Nenhum sentimento é final <br />
          <br />
          <span>Rainer Maria Rilke</span>
        </p>
        <div className="banner bottom"></div>
      </motion.div>
    </Container>
  );
}

import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { Container } from './styles';
import logoBlack from '../../assets/logo-black.png';
import { questions } from './questions';
import { motion } from 'framer-motion';
import { useIsMobileLogo } from '../../hooks/useIsMobileLogo'

export function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const isMobileLogo = useIsMobileLogo();

  const toggleExpanded = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(null);
      unlockBodyScroll();
    } else {
      setExpandedIndex(index);
      lockBodyScroll();
    }
  }

  function lockBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  function unlockBodyScroll() {
    document.body.style.overflow = '';
  }

  const closeAnswer = () => {
    setExpandedIndex(null);
    unlockBodyScroll();
  };

  return (
    <Container id='faq'>
      <motion.div
      className='grid-wrapper'
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
      >
      <h1 className='title'>perguntas frequentes</h1>
      <div className="flex-wrapper">
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              <div className="question">
                <span>{question.question}</span>
                <button className='plus' onClick={() => toggleExpanded(index)}><AiOutlinePlus size="2rem" /></button>
              </div>
              {expandedIndex === index &&
                <div className="answer-overlay">
                  <div className={expandedIndex !== null ? 'answer open' : 'answer closed'} >
                    <div className='text'>
                      {question.answer}
                    </div>
                    <button className='minus' onClick={closeAnswer}>
                      <IoClose size="3rem" />
                    </button>
                  </div>
                </div>}
            </li>
          ))}
        </ul>

        <p className='poem'>
        Peço-lhe, tanto quanto puder, caro senhor, que seja paciente com tudo o que não esteja resolvido em seu coração e tente ter amor pelas próprias perguntas, como se fossem quartos trancados ou livros escritos em uma língua estrangeira. Não busque agora as respostas que não lhe podem ser dadas, porque não poderia vivê-las. E é disso que se trata, de viver tudo. 
        Viva agora as perguntas.
        Talvez, então, gradativamente, sem notar, em algum dia distante, você venha viver nas respostas.
        <br />
        <span>Rainer Maria Rilke, em Cartas a um Jovem Poeta</span>
        </p>
      </div>

      <img style={{display: isMobileLogo ? "none" : "block"}} className='logo' src={logoBlack} alt="Logo Juliana de Alencar" />
      </motion.div>
    </Container>
  );
}

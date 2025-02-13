import { useState, useEffect } from "react";
import "./App.css";
import { Share2, Bot, BookOpen } from "lucide-react";
import card1 from "./assets/card1.webp";
import card2 from "./assets/card2.webp";
import card3 from "./assets/card3.webp";
import card4 from "./assets/card4.webp";
import brain from "./assets/brain.png";

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 30) {
        setCount1(prevCount => prevCount + 1);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Atualiza a cada 500ms

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 16) {
        setCount2(prevCount => prevCount + 1);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Atualiza a cada 500ms

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < 300) {
        setCount3(prevCount => prevCount + 2);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Atualiza a cada 500ms

    return () => clearInterval(interval); // Limpa o intervalo quando o componente desmontar
  }, []);

  return (
    <div className="App">
      <div className="box">
        <div className="banner">
          <div className="btn_banner">
            <a href="#">Saiba mais!</a>
          </div>
        </div>
      </div>

      <div className="box_cards">
        <div className="cards_wrapper">
          <div className="container_card">
            <h3>
              Curiosity<span>6+</span>
            </h3>
            <div className="card1">
              <img src={card1} alt="Imagem do card" />

              <svg className="mask">
                <clipPath id="svg">
                  <path
                    d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                    stroke="black"
                  />
                </clipPath>
              </svg>
            </div>
            <div className="btn_card">
              <Share2 />
            </div>
          </div>

          <div className="container_card">
            <h3>
              Discovery<span>9+</span>
            </h3>
            <div className="card1">
              <img src={card2} alt="Imagem do card" />
              <svg className="mask">
                <clipPath id="svg">
                  <path
                    d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                    stroke="black"
                  />
                </clipPath>
              </svg>
            </div>
            <div className="btn_card">
              <Share2 />
            </div>
          </div>

          <div className="container_card">
            <h3>
              Pionner<span>12+</span>
            </h3>
            <div className="card1">
              <img src={card3} alt="Imagem do card" />
              <svg className="mask">
                <clipPath id="svg">
                  <path
                    d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                    stroke="black"
                  />
                </clipPath>
              </svg>
            </div>
            <div className="btn_card">
              <Share2 />
            </div>
          </div>

          <div className="container_card">
            <h3>
              Challenger<span>14+</span>
            </h3>
            <div className="card1">
              <img src={card4} alt="Imagem do card" />
              <svg className="mask">
                <clipPath id="svg">
                  <path
                    d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                    stroke="black"
                  />
                </clipPath>
              </svg>
            </div>
            <div className="btn_card">
              <Share2 />
            </div>
          </div>
        </div>
      </div>

      <div className="informations">
        <div className="information_title">
          <p>/ Conteudo /</p>
          <h1>
            Ferramentas de aprendizado<br></br> digital que nós ensinamos
          </h1>
        </div>

        <div className="wrapper_table_content">
          <div className="table_content">
            <div className="content_unit">
              <h4>Chat Automatizado</h4>
              <p>
                Ferramenta de inteligência artificial que desenvolve chats
                automatizados e interativos.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Geração de Imagem</h4>
              <p>
                Algoritmo de IA que cria imagens exclusivas a partir de
                descrições textuais detalhadas.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Impressão 3D</h4>
              <p>
                Tecnologias para transformar designs digitais em objetos físicos
                tridimensionais.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Desenvolvimento Colaborativo</h4>
              <p>
                Plataforma para desenvolvimento conjunto de software e
                gerenciamento de versões de código.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Editor de Código</h4>
              <p>
                Ambiente de desenvolvimento versátil e ideal para programadores
                de diversos níveis e áreas.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Python</h4>
              <p>
                Linguagem de programação acessível, amplamente utilizada em IA e
                automação.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Interatividade Web</h4>
              <p>
                Linguagem de alto nível para adicionar interatividade e
                funcionalidades avançadas a sites.
              </p>

              <Bot className="bot" />
            </div>

            <div className="content_unit">
              <h4>Mecatrônica</h4>
              <p>
                Integração de eletrônica e mecânica aplicada no desenvolvimento
                de projetos e automação.
              </p>

              <Bot className="bot" />
            </div>
          </div>
        </div>
      </div>

      <div className="apprenticeship">
        <div className="img_logo"></div>

        <div className="apprenticeship_text">
          Ensino focado em <br></br>projetos reais e <br></br>desenvolvimento de
          soluções práticas
        </div>
      </div>

      <div class="marquee">
        <div class="marquee-content">
          Pionner | Inovação | Tecnologia | Eficiência | Curiosity | Discovery |
          Challenger|Pionner | Inovação | Tecnologia | Eficiência | Curiosity | Discovery |
          Challenger|
        </div>
      </div>

      <div className="hero">
        
        <div className="hero_text">
          <p>/ Innova Business /</p>
          <h1>Alavanque sua carreira com a inteligência<br></br>Artificial</h1>
        </div>

        <div className="brain">
          <img src={brain}></img>
        </div>

        <div className="text_brain">
          <h1>Negócios</h1>
          <p>O advento da Inteligência Artificial (IA) está revolucionando diversas áreas da nossa vida, incluindo medicina, enfermagem, psicologia, advocacia e educação. Na Innova Academy, entendemos que a IA não só melhora a eficiência e inovação, mas também redefine os mercados de trabalho, exigindo novas competências específicas para cada campo profissional.</p>
          <p>Na Innova, preparamos nossos alunos para esse mundo mais tecnológico, onde a adaptação é crucial. Manter nossos profissionais atualizados com as tecnologias emergentes não é apenas uma vantagem competitiva, mas uma necessidade. A educação tecnológica que oferecemos capacita profissionais a tornarem-se líderes inovadores, preparados para as oportunidades e desafios futuros.</p>
        </div>

        <div className="hero_container">
          <div className="numbers">
            <h1>{count1}%</h1>
            <div className="numbers_title">
              <h4>Funções <br></br>automatizadas</h4>
            </div>
          </div>
          <p>Segundo o McKinsey Global Institute, até 2030, cerca 30% dos empregos globais poderão ser automatizados devido aos avanços em IA.</p>
        </div>

        <div className="hero_container">
          <div className="numbers">
            <h1>${count2}TRI</h1>
            <div className="numbers_title">
              <h4>Impacto no PIB global</h4>
            </div>
          </div>
          <p>Segundo um relatório da PwC, a IA pode adicionar até $16 trilhões à economia global até 2030.</p>
        </div>

        <div className="hero_container">
          <div className="numbers">
            <h1>+{count3}</h1>
            <div className="numbers_title">
              <h4>Alunos Formados</h4>
            </div>
          </div>
          <p>Segundo o McKinsey Global Institute, até 2030, cerca 30% dos empregos globais poderão ser automatizados devido aos avanços em IA.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

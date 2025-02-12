import "./App.css";
import { Share2, Bot, BookOpen } from "lucide-react";
import card1 from "./assets/card1.webp";
import card2 from "./assets/card2.webp";
import card3 from "./assets/card3.webp";
import card4 from "./assets/card4.webp";

function App() {
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
          Ensino focado em <br></br>projetos reais e <br></br>desenvolvimento de soluções práticas
        </div>
      </div>
    </div>
  );
}

export default App;

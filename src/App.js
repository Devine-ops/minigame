import "./App.css";

function App() {
  class TextGenerator {
    constructor() {
      this.sentences = [
        "A tecnologia está transformando o mundo de maneiras nunca antes vistas, criando novas formas de comunicação, trabalho e entretenimento. No passado, processos demoravam semanas para serem concluídos, mas com a tecnologia, a automação e a inteligência artificial, conseguimos realizar tarefas com uma eficiência impressionante em questão de minutos.",
        "A inovação é o motor do progresso, impulsionando novas descobertas e oportunidades que têm o poder de revolucionar diversas áreas da sociedade. Desde a medicina até a agricultura, a inovação está possibilitando que enfrentemos problemas globais de maneiras mais eficazes, criando soluções sustentáveis e acessíveis para as gerações futuras.",
        "Empresas estão cada vez mais focadas em soluções sustentáveis e tecnológicas, buscando integrar práticas ecológicas em seus modelos de negócios. Isso inclui o uso de energia renovável, a redução do desperdício e a implementação de tecnologias inteligentes que visam minimizar o impacto ambiental, promovendo um futuro mais verde e equilibrado.",
        "O aprendizado contínuo é essencial para acompanhar as mudanças do mercado, principalmente em um mundo onde as tecnologias evoluem a passos largos. A educação não se limita mais a salas de aula, mas se expande para ambientes digitais, onde o acesso ao conhecimento está ao alcance de todos. Ferramentas como cursos online, webinars e tutoriais têm permitido que pessoas de todas as idades aprendam novas habilidades a qualquer hora e lugar.",
        "A automação está revolucionando diversas indústrias, tornando processos mais eficientes e precisos. Desde a fabricação até os serviços financeiros, a automação permite que as empresas diminuam custos, aumentem a produção e melhorem a qualidade. Isso não só melhora o desempenho das empresas, mas também aumenta a segurança no local de trabalho, ao eliminar tarefas repetitivas e propensas a erros.",
        "O futuro pertence àqueles que se adaptam às novas tecnologias e desafios, sendo capazes de inovar e se reinventar constantemente. Aqueles que abraçam as mudanças com uma mentalidade aberta e dispostos a aprender novas habilidades estarão prontos para prosperar no cenário global competitivo que se desenha.",
        "A inteligência artificial está cada vez mais presente no nosso dia a dia, não apenas em setores de tecnologia, mas em diversas outras áreas como saúde, finanças, transporte e até mesmo em nossas casas. Assistentes virtuais, sistemas de recomendação e carros autônomos são apenas alguns exemplos de como a IA está integrando-se à nossa rotina e impactando positivamente a nossa forma de viver.",
        "Novas tendências surgem a todo momento no mundo da tecnologia e inovação, e é importante para as empresas e indivíduos se manterem atualizados sobre as mudanças. Com o advento da computação quântica, das redes 5G e da biotecnologia, estamos prestes a vivenciar transformações ainda mais impactantes, capazes de transformar radicalmente a sociedade como conhecemos hoje."
      ];
    }

    shuffleArray(array) {
      return array.sort(() => Math.random() - 0.5);
    }

    generateParagraph() {
      const shuffled = this.shuffleArray([...this.sentences]);
      return shuffled.slice(0, 3).join(" ");
    }
  }

  const generator = new TextGenerator();
  let text = generator.generateParagraph();

  const words = text.split(" ");

  const getRandomWords = (array, numWords) => {
    let randomWords = [];

    while (randomWords.length < numWords) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomWord = array[randomIndex];

      if (!randomWords.includes(randomWord)) {
        randomWords.push(randomWord);
      }
    }

    return randomWords;
  };

  const randomWords = getRandomWords(words, 5);

  // Função para gerar o texto com lacunas e dropdowns
  const renderTextWithBlanks = (text, randomWords) => {
    return text.split(" ").map((word, index) => {
      if (randomWords.includes(word)) {
        return (
          <select key={index} defaultValue={word}>
            {words
              .filter((w) => w !== word) // Exclui a palavra original
              .map((w, i) => (
                <option key={i} value={w}>
                  {w}
                </option>
              ))}
          </select>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <div className="App">
      <h1>De sentido ao texto</h1>
      <div className="box">
        <div className="text">
          <p style={{ margin: "0 auto", width: "900px", color: "#fff" }}>
            {renderTextWithBlanks(text, randomWords)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

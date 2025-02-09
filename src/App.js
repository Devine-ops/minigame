import "./App.css";
import imagem from "./assets/test.png";

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
          <div className="card1" id="mask1">
            <img src={imagem} />
            <svg className="mask">
              <clipPath id="svg">
                <path
                  d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                  stroke="black"
                />
              </clipPath>
            </svg>
          </div>

          <div className="card2"></div>

          <div className="card3"></div>

          <div className="card4"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

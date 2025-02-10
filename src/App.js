import "./App.css";
import card1 from "./assets/card1.png";
import card2 from "./assets/card2.png";
import card3 from "./assets/card3.png";
import card4 from "./assets/card4.png";

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
  <div className="card1">
    <img src={card1} alt="Imagem do card" />

    <svg className="mask" viewBox="0 0 401 351" width="100%" height="100%">
      <clipPath id="svg">
        <path
          d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
          stroke="black"
        />
      </clipPath>
    </svg>
  </div>
</div>


          <div className="card2">
            <img src={card2} />
            <svg className="mask">
              <clipPath id="svg">
                <path
                  d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                  stroke="black"
                />
              </clipPath>
            </svg>
          </div>

          <div className="card3">
            <img src={card3} />
            <svg className="mask">
              <clipPath id="svg">
                <path
                  d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                  stroke="black"
                />
              </clipPath>
            </svg>
          </div>

          <div className="card4">
            <img src={card4} />
            <svg className="mask">
              <clipPath id="svg">
                <path
                  d="M373 1H29.2282C13.6754 1 1.10289 13.675 1.22915 29.2273L3.61603 323.227C3.74085 338.602 16.2398 351 31.6151 351H293.379C308.843 351 321.379 338.464 321.379 323V302C321.379 286.536 333.915 274 349.379 274H373C388.464 274 401 261.464 401 246V29C401 13.536 388.464 1 373 1Z"
                  stroke="black"
                />
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

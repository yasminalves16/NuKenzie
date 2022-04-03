import "./style.css";
import Logo from "./logo.svg";
import Home from "./homePage.png";

const HomePage = ({ onClick }) => {
  return (
    <div className="home">
      <section className="homeDisplay">
        <section className="homeSection">
          <img src={Logo} alt="Logo nuKenzie"></img>

          <h2>Centralize o controle das suas finanças</h2>

          <p>de forma rápida e segura</p>

          <button
            onClick={() => {
              onClick(false);
            }}
            className="iniciar"
          >
            Iniciar
          </button>
        </section>
        <section className="img">
        <img src={Home} alt=""></img>
        </section>
      </section>
    </div>
  );
};

export default HomePage;

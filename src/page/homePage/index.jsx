const HomePage = ({ onClick }) => {
  return (
    <div className="landing-container">
      <section className="left">
        <p>imagem logo</p>

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

      <p>rodinhas</p>
    </div>
  );
};

export default HomePage;

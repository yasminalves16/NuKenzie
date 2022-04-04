import "./App.css";
import { useState } from "react";
import Form from "./components/form";
import List from "./components/list";
import TotalMoney from "./components/totalMoney";
import HomePage from "./page/homePage";
import Filter from "./components/filter";
import Logo from "./components/img/logoKenzie.svg";
import CardPage from "./components/img/NoCard.png";

function App() {
  const [listTransactions, setListTransactions] = useState([
    // { description: "Salário recebido", type: "entrada", value: 2500 }
  ]);

  const [homePage, setHomePage] = useState(true);

  const [filteredList, setFilteredList] = useState([]);

  return homePage ? (
    <HomePage onClick={setHomePage} />
  ) : (
    <div className="App">
      <header>
        <span>
          <img src={Logo} alt="Logo nuKenzie"></img>
        </span>
        <button onClick={() => setHomePage(true)}>Inicio</button>
      </header>
      <main>
        <div>
          <section className="left-side">
            <Form
              list={listTransactions}
              listTransactions
              setListTransactions={setListTransactions}
            />
          </section>
          <section className="left">
            {listTransactions.length > 0 && (
              <TotalMoney list={listTransactions} />
            )}
          </section>
        </div>
        <div className="right-side">
          <Filter
            listTransactions={listTransactions}
            setFilteredList={setFilteredList}
          />
          {listTransactions.length < 1 && (
            <div>
              <p>Você ainda não possui nenhum lançamento</p>
              <img src={CardPage} alt=""></img>
            </div>
          )}
          {filteredList.length > 0 ? (
            <List
              setListTransactions={setListTransactions}
              list={filteredList}
            ></List>
          ) : (
            <List
              setListTransactions={setListTransactions}
              list={listTransactions}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;

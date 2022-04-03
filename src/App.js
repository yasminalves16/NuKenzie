import "./App.css";
import { useState } from "react";
import Form from "./components/form";
import List from "./components/list";
import TotalMoney from "./components/totalMoney";
import HomePage from "./page/homePage";
import Filter from "./components/filter";

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
          {/* logo */}
        </span>
        <button onClick={() => setHomePage(true)}>Inicio</button>
      </header>
      <main>
        <div className="left-side">
          <Form
            list={listTransactions}
            listTransactions
            setListTransactions={setListTransactions}
          />
          {listTransactions.length > 0 && (
            <TotalMoney list={listTransactions} />
          )}
        </div>
        <div className="right-side">

          <Filter
            listTransactions={listTransactions}
            setFilteredList={setFilteredList}
          />
          {/* {listTransactions.length < 1 && <ClearList />} */}
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

import "./App.css";
import { useState } from "react";
import Form from "./components/form";
import List from "./components/list";
import TotalMoney from "./components/totalMoney";
import HomePage from "./page/homePage";
import Filter from "./components/filter";
import CardPage from "./components/img/NoCard.png";
import Header from "./components/header"

function App() {
    const [listTransactions, setListTransactions] = useState([]);

    const [homePage, setHomePage] = useState(true);

    const [filteredList, setFilteredList] = useState([]);

    return homePage ? (
        <HomePage onClick={setHomePage} />
    ) : (
        <div className="App">

            <Header setHomePage={setHomePage}/>
            
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
                            setListTransactions={setFilteredList}
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

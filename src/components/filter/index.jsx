const Filter = ({ listTransactions, setFilteredList }) => {
    const filterAll = () => {
      setFilteredList(listTransactions);
    }
  
    const filterEntry = () => {
      setFilteredList(listTransactions.filter((elem) => elem.type === "entrada"));
    }
  
    const filterExit = () =>{
      setFilteredList(listTransactions.filter((elem) => elem.type === "saida"));
    }
  
    return (
      <div className="filter-container">
        <h3>Resumo financeiro</h3>
        <ul className="filter-list">
          <li>
            <button onClick={filterAll}>Todos</button>
          </li>
          <li>
            <button onClick={filterEntry}>Entradas</button>
          </li>
          <li>
            <button onClick={filterExit}>Despesas</button>
          </li>
        </ul>
      </div>
    );
  }
  
  export default Filter;
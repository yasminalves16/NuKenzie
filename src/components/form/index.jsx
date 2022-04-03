import { useState } from "react";

const Form = ({ list, setListTransactions }) => {

   const [novaEntrada, setNovaEntrada] = useState({});
      
    const newTransaction = (newArr)  => {
        setListTransactions([...list, newArr]);
    }

  return (

    <form>
      <label for="descricao"> Descrição </label>
      <input onChange={(e) => { setNovaEntrada({ ...novaEntrada, description: e.target.value });}}
        name="descricao"
        id="descricao"
        type="text"
        placeholder="Digite aqui sua descrição"
      />

      <p>Ex: Compra de roupas</p>

      <div >
        <span>
          <label for="valor"> Valor </label>
          <input
            onChange={(e) => { setNovaEntrada({...novaEntrada,value: Number.parseFloat(e.target.value),});
            }}
            name="valor"
            id="valor"
            type="number"
            placeholder="1 R$"
          />
        </span>

        <span >
          <label for="tipo" >Tipo de valor</label>
          <select onChange={(e) => {setNovaEntrada({ ...novaEntrada, type: e.target.value });}}
            name="tipo"
            id="tipo"
          >
            <option value="-"> - </option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </span>
      </div>

      <button
        onClick={(e) => { e.preventDefault(); newTransaction(novaEntrada);}}>Inserir valor
      </button>
    </form>
  );
}

export default Form;
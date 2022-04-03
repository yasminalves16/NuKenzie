import Button from "../button";

const Card = ({ transaction, setListTransactions, list }) => {
    return (
        <li>
          <div >
            <h3>{transaction.description}</h3>
            <p>{transaction.type}</p>
          </div>
          <span>R$ {transaction.value}</span>
          <Button
            transaction={transaction}
            list={list}
            setListTransactions={setListTransactions}
          />
        </li>
      );

}

export default Card;

// li  className={transaction.type === "saida" ? "saida" : "card"}
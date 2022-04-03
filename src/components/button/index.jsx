import { useState } from "react";

const Button = ({ list, setListTransactions, transaction }) => {
  const [counter, setCounter] = useState(0);

  const deleteThisProd = (trans) => {
    if (list.length === 1) {
      setListTransactions([]);
    } else {
      setListTransactions(
        list.filter((elem) => {
          if (elem === trans && counter === 0) {
            setCounter(counter + 1);
          } else if (elem === trans && counter === 1) {
            return elem === trans;
          }
          return elem !== trans;
        })
      );
    }
  };
  return (
    <button
      className="remove-button"
      onClick={(e) => {
        deleteThisProd(transaction);
      }}
    >
      excluir
    </button>
  );
};

export default Button;

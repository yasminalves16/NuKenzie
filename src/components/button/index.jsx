const Button = ({ list, setListTransactions, transaction }) => {
  

  const deleteThisProd = (transaction) => {

    if (list.length === 1) {
      setListTransactions([]);
    } else {
      const filtrados = list.filter((elem) =>  elem !== transaction)
      setListTransactions(filtrados);
    }
  };

  return (
    <button
      className="remove-button"
      onClick={() => {
        deleteThisProd(transaction);
      }}
    >
      excluir
    </button>
  );
};

export default Button;

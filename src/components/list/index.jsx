import Card from "../card"

const List = ({ list, setListTransactions }) => {

   return (
    <ul>
      {list.map((elem, index) => {

        return (
          <Card key={index} setListTransactions={setListTransactions} list={list} transaction={elem}/>
        );

      })}
    </ul>
  );
}

export default List
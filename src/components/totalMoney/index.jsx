const TotalMoney = ({ list }) => {

    const ValorTotal = () => {

        return (
            list.reduce((acumulador, valorAtual) =>
                (acumulador + Number(valorAtual.type === "entrada" ? (valorAtual.value) : (valorAtual.value * -1))), 0)
        )
    }


    return (
        <div>
            <p>Valor Total:</p>
            <p className='valorTotal'>$ {ValorTotal().toFixed(2)}</p>
            <span>O valor se refere ao saldo</span>
        </div>
    )
}

export default TotalMoney;

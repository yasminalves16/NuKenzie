import Logo from "../img/logoKenzie.svg";

const Header = ({setHomePage}) => {

    return (
        <header>
            <span>
                <img src={Logo} alt="Logo nuKenzie"></img>
                </span>
                <button onClick={() => setHomePage(true)}>Inicio</button>
        </header>
    )

}

export default Header
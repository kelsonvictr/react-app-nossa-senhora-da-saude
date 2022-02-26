//Importando css para o componente:
import "./styles.css"

//img:
import mainImage from "./nssaude.png"

function Header() {
    return (
        <>
            <header>
                <h1>Nossa Senhora da Saúde</h1>
                <img src={mainImage} alt="São Miguel Arcanjo" />
            </header>
        </>
    );

}

export default Header;
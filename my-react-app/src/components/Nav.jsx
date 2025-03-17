//importerer ressurserser fra arrayData

import resources from "./ArrayData"


//lager en variabel med en funksjon som returnerer noe basert på hvilken knapp som er trykket på. Resource komponentet som også ligger i 
//komponent mappen får beskjed fra nav om hvilken kategori som er trykket på og skriver derfor ut informasjonen basert på det. 
const Nav = ({ onSelectedCategory }) => {
    return (
        <nav>
            <button className="buttonCategory" onClick={() => onSelectedCategory("HTML")}>HTML</button>
            <button className="buttonCategory" onClick={() => onSelectedCategory("CSS")}>CSS</button>
            <button className="buttonCategory" onClick={() => onSelectedCategory("JavaScript")}>JavaScript</button>
            <button className="buttonCategory" onClick={() => onSelectedCategory("React")}>React</button>
        </nav>
    )
}

export default Nav;
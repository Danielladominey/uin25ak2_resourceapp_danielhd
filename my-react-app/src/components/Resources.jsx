

//Først importerer jeg ressursene mine som ligger i components mappa. 
// Denne heter ArrayData og inneholder arrayen med informasjonen som skal skrives ut.
import resources from "./ArrayData";
import { Link } from "react-router-dom";


//lager en variabel som skal lagre informasjonen i funksjonen.
const Resources = ({ category }) => {

    //Resources er som sagt en array av objekter som jeg har importert hvor hvert objekt representerer
    //et en ressurs som skal skrives ut.
    //resources.find søker gjennom arrayen, sjekker om objektet har samme kategori som søkes etter og lagrer deretter 
    //første bok som blir funnet i resource variabelen.
    const resource = resources.find(res => res.category === category);


    //Basert på hvilket objekt eller resource som finnes i søket over returneres en seksjon med 
    //tilhørende informasjon i form av en section med h2, p og en ul med li elementer. Vi henter 
    //kategori navn i h2, tilhørende informasjon i p og deres linker i ul listen. I en ul liste mappes det igjennom listen av 
    //linker og lager et li element med a lenker for hver url. 
    //for å gi hvert element i ul listen etter mapping en type id eller en key prop bruker jeg key slik at jeg ikke får
    //feil i terminalen. Her husket jeg at jeg burde bruke key fra forelesning men har spurt chat GPT "hva skjer hvis jeg ikke bruker key" 
    //for å forstå bedre.
    return (
        <section className="sectionResources">
           <h2>{resource.category}</h2>
           <p>{resource.text}</p>
           <ul>
            {resource.sources.map((src, i) => (
                <li key={i}>
                    <a href={src.url}>{src.title}</a>
                </li>
            ))}
           </ul>
        </section>
    ); 
};

//eksporterer slik at jeg kan bruke komponentet andre steder i prosjektet
export default Resources;
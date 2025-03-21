import { useState } from 'react'
import './App.scss'
import PageTitle from './components/PageTitle'
import Nav from './components/Nav'
import Resources from './components/Resources'
import Layout from './components/Layout'



//med useState "starter" det opp med en default som er html, det vil si at innholdet for HTML
//Vil vises når man åpner nettstedet. Når en knapp trykket byttes kategorien ut og blir erstattet med den
//valgte kategorien og dens informasjon.
export default function App() {
  const [category, setCategory] = useState("HTML");


  //her ligger alle komponentene mine. Pagetitle tar inn en prop som heter title og viser dermed resource library.
  //onSelectedCategory={setCategory} beyr at når en bruker benytter seg av knappene i nav så oppdateres category staten, resources får da riktig kategori.
  //Resources category viser ressursene basert på hvilken kategori brukeren har trykket på
  return (
    <Layout>
    <div>
      <PageTitle title="Resource Library"/>
      <Nav onSelectedCategory={setCategory} />
      <Resources category={category} />
    </div>
    </Layout>
  )

}
  


import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { useRef } from "react"
import "./index.css"


function App() {

  
  const list = [ 1, 2, 3 ]

  const cardsRefArray = useRef([])
  const buttonsRefArray = useRef([])

  function handleClick(e) {

    const clicked = {"backgroundColor" : "red" , "color" : "blue"}
    const unclicked = {"backgroundColor" : "blue" , "color" : "red"}
    
    cardsRefArray.current[e.target.id].style.fontWeight = 
    (cardsRefArray.current[e.target.id].style.fontWeight === 
      "200" 
    ? "700" 
    : "200")

    buttonsRefArray.current[e.target.id].style = 
    (cardsRefArray.current[e.target.id].style.fontWeight === 
      "200" 
    ? clicked 
    : unclicked)

  }


  return (
    <div className="App">
      
      <Navbar />
      <Card list={list} cardsRefArray={cardsRefArray}/>
      <Footer list={list} buttonsRefArray={buttonsRefArray} handleClick={handleClick}/>

    </div>
  );
}

export default App;

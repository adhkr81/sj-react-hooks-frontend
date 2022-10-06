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

    console.log(e.target)
    console.log(cardsRefArray.current[e.target.id].style.cssText)


    if (cardsRefArray.current[e.target.id].style.cssText === "font-weight: 200; border-color: rgb(118, 118, 118); border-width: 1px;") {
      cardsRefArray.current[e.target.id].style.cssText = "font-weight: 700; border-color: black; border-width: 3px;"

    } else {
      cardsRefArray.current[e.target.id].style.cssText = "font-weight: 200; border-color: rgb(118, 118, 118); border-width: 1px;"
    }
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

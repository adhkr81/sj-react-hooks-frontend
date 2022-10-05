import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { useRef } from "react"
import "./index.css"


function App() {

  const itemEls = useRef(new Array())

  function handleClick(e) {
    itemEls.current[e.target.id].style.fontWeight = (itemEls.current[e.target.id].style.fontWeight === "200" ? "700" : "200")

  }

  const list = [ 1, 2, 3 ]

  return (
    <div className="App">
      
      <Navbar />
      <Card list={list} itemEls={itemEls}/>
      <Footer handleClick={handleClick}/>

    </div>
  );
}

export default App;

import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { Charts } from "./components/Charts"

import { useEffect, useRef, Fragment } from "react"
import { Routes, Route } from "react-router-dom"
import "./index.css"


function App() {

  
  const list = [
    {number: 1 , name: "useRef"},
    {number: 2 , name: "useMemo"},
    {number: 3 , name: "useEffect"}
  ]

  const cardsRefArray = useRef([])
  const footerRefArray = useRef([])
  const navbarRefArray = useRef([])

  function handleClick(e) {

    if (cardsRefArray.current[e.target.id].style.cssText === "font-weight: 200; border-color: rgb(118, 118, 118); border-width: 1px;") {
      cardsRefArray.current[e.target.id].style.cssText = "font-weight: 700; border-color: black; border-width: 2px;"
      footerRefArray.current[e.target.id].style.cssText = "color: white; background-color: black;"


    } else {
      cardsRefArray.current[e.target.id].style.cssText = "font-weight: 200; border-color: rgb(118, 118, 118); border-width: 1px;"
      footerRefArray.current[e.target.id].style.cssText = "color: black; background-color: white;"
    }
  }


  useEffect(() => {
    navbarRefArray.current[0].style.cssText = "color: white; background-color: black;"
  },[])



  return (
    <div className="App">
      
      <Navbar list={list} navbarRefArray={navbarRefArray}/>

      <Routes>
          <Route path='/useRef' element={
                <Fragment>
                  <Card list={list} cardsRefArray={cardsRefArray}/>
                  <Footer list={list} footerRefArray={footerRefArray} handleClick={handleClick}/>
                </Fragment>
          } />

          <Route path='/useMemo' element={<Charts />} />

      </Routes>

    </div>
  );
}

export default App;



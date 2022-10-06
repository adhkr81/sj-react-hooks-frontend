import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"
import { useEffect, useRef, useState } from "react"
import "./index.css"


function App() {

  
  const list = [
    {number: 1 , name: "useRef Demo"},
    {number: 2 , name: "useMemo Demo"},
    {number: 3 , name: "useEffect Demo"}
  ]

  const cardsRefArray = useRef([])
  const footerRefArray = useRef([])
  const navbarRefArray = useRef([])

  function handleClick(e) {

    if (cardsRefArray.current[e.target.id].style.cssText === "font-weight: 200; border-color: rgb(118, 118, 118); border-width: 1px;") {
      cardsRefArray.current[e.target.id].style.cssText = "font-weight: 700; border-color: black; border-width: 3px;"
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
      <Card list={list} cardsRefArray={cardsRefArray}/>
      <Footer list={list} footerRefArray={footerRefArray} handleClick={handleClick}/>

    </div>
  );
}

export default App;

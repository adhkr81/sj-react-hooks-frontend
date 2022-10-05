import { Navbar } from "./components/Navbar"
import { Card } from "./components/Card"
import { Footer } from "./components/Footer"


function App() {

  const list = [ 1, 2, 3 ]

  return (
    <div className="App">
      
      <Navbar />
      <Card list={list}/>
      <Footer />

    </div>
  );
}

export default App;

import Topbar from "./componenets/topbar/topbar"
import Introduction from "./componenets/intro/intro"
import Contact from "./componenets/contact/contact" 
import Projects from "./componenets/projects/projects"
import "./App.scss"
import { useState } from "react"
import Menu from "./componenets/menu/menu"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  
  return (
    <div className="App">
        
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections ">
          
          <Introduction />
          <Projects />
          <Contact />
        </div>
                
    </div>
  );
}

export default App;

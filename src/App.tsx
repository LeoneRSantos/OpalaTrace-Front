import NavBar from "./views/components/navbar/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/pages/Home"
import Opalas from "./views/pages/Opalas"
import Configuracoes from "./views/pages/Configuracoes"
import Rastreamento from "./views/pages/Rastreamento"
import Agentes from "./views/pages/Agentes"
import { SignIn } from "./views/login"
import "../app/globals.css"

function App() {

  return (
    <main className="bg-gray-950 text-white">
      <NavBar />

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opalas" element={<Opalas />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/rastreamento" element={<Rastreamento />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./views/pages/Home"
import Opalas from "./views/pages/Opalas"
import Configuracoes from "./views/pages/Configuracoes"
import Rastreamento from "./views/pages/Rastreamento"
import Agentes from "./views/pages/Agentes"
import { SignIn } from "./views/login"
import "../app/globals.css"
import Formulario from "./views/pages/Formulario"
import AlterarDados from "./views/pages/Alterar-dados"
import {AutenticacaoProvider} from "./context/Auth"

function App() {

  return (
    <Router>
    <AutenticacaoProvider>

    <main className="bg-back-color text-white">
        <Routes>
          <Route path="/opalas" element={<Opalas />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/rastreamento/:index?" element={<Rastreamento />} />
          <Route path="/agentes" element={<Agentes />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/alterar-dados" element={<AlterarDados />} />
        </Routes>
    </main>
    </AutenticacaoProvider>
    </Router>
  )
}

export default App

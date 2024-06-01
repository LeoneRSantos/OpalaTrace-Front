import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";



function Configuracoes() {

    const [nomes, setnomes] = useState()
    const [onEdit, setOnEdit] = useState(null)

    const getNomes = async () => {
        try {
            const res = await axios.get('http://localhost:3000/usuarios');
            setnomes(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
         <NavBar />
        <main className="h-screen flex w-full">

            <div className="min-h-screen flex items-start justify-center w-full bg-back-color">
                <div>
                    <div className="margin-left: 16px;">
                        <h2>Configurações</h2>
                        <p>Esta será a tela na qual será possível ver as configurações</p>
                    </div>
                </div>
            </div>

        </main>
        </>
    )
}

export default Configuracoes;
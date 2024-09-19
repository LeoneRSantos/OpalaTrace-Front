import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useState } from "react";

function Opalas() {
    interface Opalas{ 
        custodiante: string;
        funcao: string;
        name: string;
        id: string;
    }

    const [opalas, setOpalas] = useState<Opalas[]>([])

    const getOpalas = async () => {
        try {
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/pools");

            setOpalas(opala.data);
    
            console.log(opala.data[0]);
            
        } catch (error) {
            console.log(error);

        }
    }

    getOpalas();

    return (
        <>
            <NavBar />
            <main className="h-screen  w-full justify-center  bg-back-color">


                <div className="max-w-lg  mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{opalas.at(0)?.name} </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Custodiante: </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Função: </p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color">
                        Transferir
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>


            </main>
        </>
    )
}

export default Opalas;
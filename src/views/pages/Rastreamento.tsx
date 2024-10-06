import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";

function Rastreamento() {

    const rastreio = [{
        custodiante: "Andrade",
        funcao: "Varejista",
        data: "23/03/24",
        hora: "09h30",
        peso: "20g",
        tipo: "2"
    }]

    interface Opalas {
        custodiante: string;
        funcao: string;
        name: string;
        id: string;
        type: string;
        pool: string;
        to: string;
        created: string;
        from: string;
        verifiers: any;
        nome: string;
        id_funcao: string;
    }

    function definirNome(carteiraEthereum: string) {
        // Itera pela lista de elementos em 'nomes'
        for (let element of nomes) {
            // Itera pela lista de 'verifiers' dentro de cada elemento
            for (let verifier of element.verifiers) {
                // Se o valor do verifier for igual ao parâmetro, retorna o nome
                if (verifier.value === carteiraEthereum) {
                    // console.log(element.verifiers);
                    for (let info of infoBD) {
                        if (element.id == info.id) {
                            return info.nome
                        }
                    }
                    return element.to;
                }
            }
        }



    const [opalas, setOpalas] = useState<Opalas[]>([])

    const getOpalas = async () => {
        try {
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/transfers");

            // Verifica se 'opala.data' é um array e filtra apenas os itens com type "transfer"
            if (Array.isArray(opala.data)) {
                const filteredTransfers = opala.data.filter(item => item.type === "transfer");
                setOpalas(opala.data);
                console.log(filteredTransfers);
            } else {
                console.log("A resposta não é um array.");
            }

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        getOpalas()
    }, [10000])

    return (
        <>
            <NavBar />

            {opalas.map((cadaLocal: any) => (
                <ol className="relative border-s border-gray-800 dark:border-gray-900 my-8 mx-8 mt-4">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{cadaLocal.created}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Opala {cadaLocal.pool}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">Transferência para {cadaLocal.to}</p>
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Detalhes <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg></a>
                    </li>

                </ol>

            ))}


        </>
    )
}

export default Rastreamento;
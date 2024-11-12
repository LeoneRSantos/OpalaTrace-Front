import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { formatarData } from "../../utils/FormatarData"
import { useAuth } from "@/context/Auth";
import { definirFuncaoPeloIDEthereum } from "../../utils/DefinirFuncao";
import { definirNomePeloIDEthereum } from "../../utils/DefinirNomePeloIDEthereum";

function Rastreamento() {

    // { index }: { index?: string }

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
        localId: string;
        tokenIndex: string
    }

    // Contexto
    const auth = useAuth();

    // Usuário logado
    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);

    // TokenIndex recuperado pela URL
    const { index } = useParams();


    // Listas de dados
    const [opalas, setOpalas] = useState<Opalas[]>([]);
    const [infoBD, setInfoBD] = useState<Opalas[]>([]);
    const [nomes, setNomes] = useState<Opalas[]>([]);

    const getOpalas = async () => {
        try {
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/transfers");

            const nomes = await axios.get("http://localhost:5000/api/v1/identities?fetchverifiers=true");

            // Recuperar dados do Banco de Dados
            const info = await axios.get('http://localhost:3000/usuarios');
            setInfoBD(info.data);

            setNomes(nomes.data);

            // Verifica se 'opala.data' é um array e filtra apenas os itens com type "transfer"
            if (Array.isArray(opala.data)) {

                // Filtra as transferências pelo índice
                const filteredTransfers = opala.data.filter(item => item.type === "transfer" && item.tokenIndex == index);

                // Filtra as transferências que chegaram ao usuário logado
                const filteredTransfersPadrao = opala.data.filter(item => item.type === "transfer" && item.to === usuarioLocal.idEthereum);
                setOpalas(filteredTransfers.length == 0 ? filteredTransfersPadrao : filteredTransfers);

                console.log(filteredTransfers);
            } else {
                console.log("A resposta não é um array.");
            }

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        if (!auth?.loading) {
            getOpalas();
        }
    }, [auth?.loading]);

    return (
        <>
            <NavBar />

            {opalas.map((cadaLocal: any) => (
                <ol className="relative border-s border-gray-800 dark:border-gray-900 my-8 mx-8 mt-4">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-800 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{formatarData(cadaLocal.created)}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Opala {cadaLocal.localId}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">{cadaLocal.to == "0x52f7528c32894683acb5ada5d867d72ace69c764" ? "Preparação para transferência" : `Transferida para ${definirNomePeloIDEthereum(cadaLocal.to, nomes, infoBD)}, ${definirFuncaoPeloIDEthereum(cadaLocal.to, nomes, infoBD)}.`}</p>
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
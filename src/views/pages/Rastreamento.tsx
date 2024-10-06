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

        return carteiraEthereum;
    }

    // Função que define a função exercida pelo agente a partir do ID
    function definirFuncao(idFuncao: string) {

        // Itera pela lista de elementos em 'nomes'
        for (let element of nomes) {
            // Itera pela lista de 'verifiers' dentro de cada elemento
            for (let verifier of element.verifiers) {
                // Se o valor do verifier for igual ao parâmetro, retorna o nome
                if (verifier.value === idFuncao) {
                    // console.log(element.verifiers);
                    for (let info of infoBD) {
                        if (element.id == info.id) {
                            console.log(info.id_funcao);
                            const funcaoAtual = info.id_funcao;

                            if (funcaoAtual == "f6499904-c2fd-49f1-a0a2-9bfd80a6cd65") {
                                return "Lapidador";
                            }
                            if (funcaoAtual == "deb21e2e-f742-4d94-80a4-b9623885244a") {
                                return "Varejista";

                            }

                            if (funcaoAtual == "ae9f5185-e07f-4fa5-916f-2d669356b79e") {
                                return "Transportador";
                            }

                            if (funcaoAtual == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d") {
                                return "Lapidador industrial";
                            }

                            if (funcaoAtual == "820529c9-4510-4b3e-9c3b-736a682fb6eb") {
                                return "Lapidador artesanal";
                            }

                            if (funcaoAtual == "30cb37d4-1b38-44b8-896b-40644120144c") {
                                return "Cliente";
                            }
                            return info.id_funcao
                        }
                    }
                    return element.name;
                }
            }
        }

        return idFuncao;
    }



    const [opalas, setOpalas] = useState<Opalas[]>([]);
    const [infoBD, setInfoBD] = useState<Opalas[]>([]);
    const [nomes, setNomes] = useState<Opalas[]>([]);

    // Transforma a data
    function formatarData(dateTime: string): string {
        // Converter a string para um objeto Date
        const date = new Date(dateTime);
      
        // Extrair partes da data e hora
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0'); // Mês é 0-based
        const year = date.getUTCFullYear();
      
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
      
        // Retornar a string formatada
        return `${day}/${month}/${year}  |  ${hours}:${minutes}:${seconds}`;
      }
    

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
                        <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">{formatarData(cadaLocal.created)}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Opala {cadaLocal.pool}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-500">{cadaLocal.to == "0x52f7528c32894683acb5ada5d867d72ace69c764" ? "Preparação para transferência" : `Transferida para ${definirNome(cadaLocal.to)}, ${definirFuncao(cadaLocal.to)}.`}</p>
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
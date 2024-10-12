import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { ModalDeTransferencia } from "../components/modal-de-transferencia/Modal-de-transferencia";

function Opalas() {
    interface Opalas {
        custodiante: string;
        funcao: string;
        name: string;
        id: string;
        pool: string;
        to: string;
        verifiers: any;
        value: string;
        did: string;
        nome: string;
        id_funcao: string;
        profile: any;
    }

    const [opalas, setOpalas] = useState<Opalas[]>([]);
    const [nomes, setNomes] = useState<Opalas[]>([]);
    const [infoBD, setInfoBD] = useState<Opalas[]>([]);



    const getOpalas = async () => {
        try {
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/transfers");

            const nomes = await axios.get("http://localhost:5000/api/v1/identities?fetchverifiers=true");

            // Recuperar dados do Banco de Dados
            const info = await axios.get('http://localhost:3000/usuarios');
            setInfoBD(info.data);

            setNomes(nomes.data);

            if (Array.isArray(opala.data)) {
                const filteredTransfers = opala.data.filter(item => item.type === "transfer");
                setOpalas(filteredTransfers);
                console.log(filteredTransfers);
            } else {
                console.log("A resposta não é um array.");
            }
        } catch (error) {
            console.log(error);

        }
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
                    return element.name;
                }
            }
        }

        return carteiraEthereum;
    }



    useEffect(() => {
        getOpalas()
    }, [10000])

    return (
        <>
            <NavBar />
            <main className="h-screen  w-full justify-center  bg-back-color">

                {opalas.map((cadaOpala) => (

                    <div className="max-w-lg  mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opala {cadaOpala.pool} </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Custodiante: {definirNome(cadaOpala.to)}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Função: {definirFuncao(cadaOpala.to)}</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color">
                            Transferir
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>

                )
                )}

            </main>
        </>
    )
}

export default Opalas;
import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { ModalDeTransferencia } from "../components/modal-de-transferencia/Modal-de-transferencia";
import { ModalDeCadastroDeOpala } from "../components/modal-de-cadastro-de-opala/Modal-de-cadastro-de-opala";
import { useAuth } from "../../context/Auth";
import { RastreamentoComponente } from "../components/rastreamento/Rastreamento-componente";
import { definirFuncaoPeloIDEthereum } from "@/utils/DefinirFuncao";
import { definirNomePeloIDEthereum } from "@/utils/DefinirNomePeloIDEthereum";

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
        localId: string,
        tokenIndex: string,
        idEthereum: string,
        key: string,
        tokenIndexCount: any
    }

    const [opalas, setOpalas] = useState<Opalas[]>([]);
    const [nomes, setNomes] = useState<Opalas[]>([]);
    const [infoBD, setInfoBD] = useState<Opalas[]>([]);

    // Contexto
    const auth = useAuth();

    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);

    const getOpalas = async () => {
        try {
            // Todas as transferências
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/transfers");

            const nomes = await axios.get("http://localhost:5000/api/v1/identities?fetchverifiers=true");

            // if (Array.isArray(mintes.data)){ 
            //     const filtro = mintes.data.filter(item => item.type === "mint");
            //     setMint(filtro);
            //     console.log(filtro);
            //   }
            //   else{ 
            //     console.log("Erro ao carregar a lista de mintes");
            //   }

            // Recuperar dados do Banco de Dados
            const info = await axios.get('http://localhost:3000/usuarios');
            setInfoBD(info.data);

            setNomes(nomes.data);

            if (Array.isArray(opala.data)) {
                const tokenIndexCount: any = {};

                // Contar quantas vezes cada `tokenIndex` aparece entre os itens com `type === "transfer"`.
                opala.data.forEach(item => {
                    if (item.type === "transfer") {
                        tokenIndexCount[item.tokenIndex] = (tokenIndexCount[item.tokenIndex] || 0) + 1;
                    }
                });

                // Filtrar os itens
                const filteredTransfers = opala.data.filter(item =>
                    item.type === "transfer" &&
                    item.to === usuarioLocal.idEthereum
                    // &&
                    // tokenIndexCount[item.tokenIndex] === 1  // Mantém apenas `tokenIndex` únicos
                );

                // Atualizar o estado com os itens filtrados
                setOpalas(filteredTransfers);
            } else {
                console.log("A resposta não é um array.");
            }

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        if (!auth?.loading) {
            getOpalas();
        }
    }, [auth?.loading]);


    return (
        <>
            <NavBar />

            <main className="h-screen  w-full justify-center  bg-back-color">
                <ModalDeCadastroDeOpala indice={Number(opalas.at(0)?.tokenIndex) + 1} id_funcao={`${usuarioLocal.id_funcao}`} id_usuario={usuarioLocal.id} destino={usuarioLocal.idEthereum} />

                {opalas.map((cadaOpala) => {

                    return (
                        <div key={cadaOpala.localId} className="max-w-lg mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opala {cadaOpala.localId}</span>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Custodiante: {definirNomePeloIDEthereum(cadaOpala.to, nomes, infoBD)}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Função: {definirFuncaoPeloIDEthereum(cadaOpala.to, nomes, infoBD)}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Índice: {cadaOpala.tokenIndex}</p>

                            <ModalDeTransferencia key={cadaOpala.id} idOpala={cadaOpala.localId} idOrigem={usuarioLocal.idEthereum} indice={cadaOpala.tokenIndex} />

                            <RastreamentoComponente indice={cadaOpala.tokenIndex} />
                        </div>
                    )

                })}

            </main>
        </>
    )
}

export default Opalas;
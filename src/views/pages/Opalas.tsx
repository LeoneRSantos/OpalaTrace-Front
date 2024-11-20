import axios from "axios";
import NavBar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";
import { ComponenteOpala } from "../components/componente-opala/ComponenteOpala"

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
        tokenIndexCount: any;
        message: string
    }

    const [opalas, setOpalas] = useState<Opalas[]>([]);
    const [nomes, setNomes] = useState<Opalas[]>([]);
    const [infoBD, setInfoBD] = useState<Opalas[]>([]);
    const [mintes, setMintes] = useState<Opalas[]>([]);
    const [todas, setTodas] = useState<Opalas[]>([]);
    const [transferidas, setTransferidas] = useState<Opalas[]>([]);

    // Contexto
    const auth = useAuth();

    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);

    const getOpalas = async () => {
        try {
            // Todas as transferências
            const opala = await axios.get("http://127.0.0.1:5000/api/v1/namespaces/default/tokens/transfers");

            const nomes = await axios.get("http://localhost:5000/api/v1/identities?fetchverifiers=true");


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

                // Filtrar os itens tarsnferidos
                const filtroTransferidas = opala.data.filter(item =>
                    item.type === "transfer" &&
                    item.to !== usuarioLocal.idEthereum && item.key == usuarioLocal.idEthereum
                    // &&
                    // tokenIndexCount[item.tokenIndex] === 1  // Mantém apenas `tokenIndex` únicos
                );
                setTransferidas(filtroTransferidas);

                // Filtrar os itens
                // Mintes
                const filtroDeMintes = opala.data.filter(item =>
                    item.type === "mint"
                );

                // Atualizar o estado com os itens filtrados
                setOpalas(filteredTransfers);
                setMintes(filtroDeMintes);
                // Todas as transferências
                setTodas(opala.data);
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

            <ComponenteOpala todas={todas} opalas={opalas} mintes={mintes} nomes={nomes} infoBD={infoBD} transferida={false} transferidas={transferidas} />

        </>
    )
}

export default Opalas;
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";
import { useAuth } from "../../context/Auth"
import { definirCarteira } from "../../utils/DefinirCarteiraFuncao"
import { definirFuncao } from "../../utils/DefinirFuncao"

function Agentes() {
    interface Usuario {
        id: string,
        nome: string,
        email: string,
        senha: string,
        id_funcao: string,
        verifiers: any,
        i: any
    }
    const [nomes, setnomes] = useState<Usuario[]>([]);
    const [Ids, setIds] = useState<Usuario[]>([]);

    const auth = useAuth();

    useEffect(() => {
        if (!auth?.loading) {
            getNomes();
        }
    }, [auth?.loading]);


    const getNomes = async () => {
        try {
            // Identidades Firefly
            const ids = await axios.get("http://localhost:5000/api/v1/identities?fetchverifiers=true");
            setIds(ids.data);

            // Usuários do BD
            const res = await axios.get('http://localhost:3000/usuarios');
            setnomes(res.data);

        } catch (error) {
            console.log(error)
        }
    }


    return (

        <>
            <NavBar />
            <main className="h-screen flex w-full items-start justify-center bg-back-color">

                <div className="max-h-screen items-start justify-center w-full mx-2 mt-4 rounded-lg border">
                    <div>
                        <div>
                            <div className="w-full">
                                <Table className="bg-back-color">
                                    <TableCaption className="bg-back-color">Lista de agentes cadastrados</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] bg-back-color">Nome</TableHead>
                                            <TableHead className="bg-back-color">Função</TableHead>
                                            <TableHead className="bg-back-color">Email</TableHead>
                                            <TableHead className="bg-back-color">ID Ethereum</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>

                                        {nomes.map((nome) => (
                                            <TableRow key={nome.id} className="bg-white shadow overflow-hidden shadow rounded-lg font-medium text-gray-900">
                                                <TableCell className="font-medium ">{nome.nome}</TableCell>
                                                <TableCell >{definirFuncao(nome.id_funcao)}</TableCell>
                                                <TableCell >{nome.email} </TableCell>
                                                <TableCell >{definirCarteira(nome.id, nomes, Ids)} </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Agentes;
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
// import { TableRowsSplit } from "lucide-react";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";

function Agentes() {
    interface Usuario {
        id: string,
        nome: string,
        email: string,
        senha: string,
        id_funcao: string
    }
    const [nomes, setnomes] = useState<Usuario[]>([])
    // const [onEdit, setOnEdit] = useState(null)



    const getNomes = async () => {
        try {
            const res = await axios.get('http://localhost:3000/usuarios');
            setnomes(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getNomes()
    }, [10000])

    function definirFuncao(idFuncao: string) {
        if (idFuncao == "f6499904-c2fd-49f1-a0a2-9bfd80a6cd65") {
            return "Lapidador";
        }
        if (idFuncao == "deb21e2e-f742-4d94-80a4-b9623885244a") {
            return "Varejista";

        }

        if (idFuncao == "ae9f5185-e07f-4fa5-916f-2d669356b79e"){ 
            return "Transportador";
        }

        if (idFuncao == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d"){ 
            return "Lapidador industrial";
        }

        if (idFuncao == "820529c9-4510-4b3e-9c3b-736a682fb6eb"){ 
            return "Lapidador artesanal";
        }

        if (idFuncao == "30cb37d4-1b38-44b8-896b-40644120144c"){ 
            return "Cliente";
        }

        // else{return "else";}
    }


    return (

        <>
            <NavBar />
            <main className="h-screen flex w-full items-start justify-center bg-back-color">

                <div className="max-h-screen items-start justify-center w-full mx-2 mt-4 rounded-lg border">
                    <div>
                        {/* <div className="margin-left: 16px;">
                        <h2>Agentes</h2>
                        <p>Esta será a tela na qual será possível adicionar e atualizar agentes</p>
                    </div> */}
                        <div>
                            <div className="w-full">
                                <Table>
                                    <TableCaption>Lista de agentes cadastrados</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] bg-back-color">Nome</TableHead>
                                            <TableHead className="bg-back-color">Função</TableHead>
                                            <TableHead className="bg-back-color">Email</TableHead>
                                            <TableHead className="bg-back-color">ID</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {nomes.map((nome) => (
                                            <TableRow key={nome.id} className="bg-white shadow overflow-hidden shadow rounded-lg font-medium text-gray-900">
                                                <TableCell className="font-medium ">{nome.nome}</TableCell>
                                                <TableCell >{definirFuncao(nome.id_funcao)}</TableCell>
                                                <TableCell >{nome.email} </TableCell>
                                                <TableCell >{nome.id} </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            {/* <TableCell colSpan={8}>Total</TableCell> */}
                                            {/* <TableCell className="text-right">{nomes.length} </TableCell> */}
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
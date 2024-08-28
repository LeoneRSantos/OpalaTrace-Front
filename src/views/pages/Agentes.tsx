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


    return (

        <>
            <NavBar />
            <main className="h-screen flex w-full items-start justify-center bg-back-color">

                <div className="max-h-screen items-start justify-center w-full bg-gray-950 max-w-md">
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
                                            <TableHead className="w-[100px]">Nome</TableHead>
                                            <TableHead>Função</TableHead>
                                            <TableHead>ID</TableHead>

                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {agentes.map((agentes) => (
                                            <TableRow key={agentes.nome}>
                                                <TableCell className="font-medium">{agentes.nome}</TableCell>
                                                <TableCell>{agentes.funcao}</TableCell>
                                                <TableCell>{agentes.id} </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            <TableCell colSpan={2}>Total</TableCell>
                                            <TableCell className="text-right">{agentes.length} </TableCell>
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
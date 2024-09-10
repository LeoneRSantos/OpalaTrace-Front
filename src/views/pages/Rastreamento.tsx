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
import NavBar from "../components/navbar/Navbar";

function Rastreamento() {

    const rastreio = [{
        custodiante: "Andrade",
        funcao: "Varejista",
        data: "23/03/24",
        hora: "09h30",
        peso: "20g",
        tipo: "2"
    }]

    return (
        <>
            <NavBar />

            <main className="h-screen flex w-full bg-back-color">

            <div className="max-h-screen items-start justify-center w-full bg-gray-500">
                    <div>
                        {/* <div className="margin-left: 16px;">
                        <h2>Agentes</h2>
                        <p>Esta será a tela na qual será possível adicionar e atualizar agentes</p>
                    </div> */}
                            <div>

                                <div className="w-full">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className="w-[100px]">Nome</TableHead>
                                                <TableHead>Função</TableHead>
                                                <TableHead>Data</TableHead>
                                                <TableHead>Hora</TableHead>
                                                <TableHead>Peso</TableHead>
                                                <TableHead>Tipo</TableHead>

                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {rastreio.map((rastreio) => (
                                                <TableRow key={rastreio.custodiante}>
                                                    <TableCell className="font-medium">{rastreio.custodiante}</TableCell>
                                                    <TableCell>{rastreio.funcao}</TableCell>
                                                    <TableCell>{rastreio.data} </TableCell>
                                                    <TableCell>{rastreio.hora} </TableCell>
                                                    <TableCell>{rastreio.peso} </TableCell>
                                                    <TableCell>{rastreio.tipo} </TableCell>

                                                </TableRow>
                                            ))}
                                        </TableBody>
                                        <TableFooter>
                                            <TableRow>
                                                <TableCell colSpan={5}>Total</TableCell>
                                                <TableCell className="text-right">{rastreio.length} </TableCell>
                                            </TableRow>
                                        </TableFooter>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Rastreamento;
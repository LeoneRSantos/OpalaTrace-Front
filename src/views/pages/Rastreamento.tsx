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
                                    <TableCaption>Lista de agentes cadastrados</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px] bg-back-color">Nome</TableHead>
                                            <TableHead className="bg-back-color">Função</TableHead>
                                            <TableHead className="bg-back-color">Data</TableHead>
                                            <TableHead className="bg-back-color">Peso</TableHead>
                                            <TableHead className="bg-back-color">Tipo</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {rastreio.map((nome) => (
                                            <TableRow key={nome.custodiante} className="bg-gray-500 font-bold">
                                                <TableCell className="font-bold">{nome.custodiante}</TableCell>
                                                <TableCell className="font-bold">{nome.funcao}</TableCell>
                                                <TableCell >{nome.data}</TableCell>
                                                <TableCell >{nome.peso} </TableCell>
                                                <TableCell >{nome.tipo} </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                            {/* <TableCell colSpan={8}></TableCell> */}
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

export default Rastreamento;
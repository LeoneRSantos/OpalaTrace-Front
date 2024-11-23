import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

interface ModalDeDetalhesDoRastreamentoProps {
    indice: string | any,// Recebe o idOpala do componente pai
    idOpala: string,
    origem: string,
    destino: string,
    data_e_hora: string
}

export function ModalDeDetalhesDoRastreamento({ indice, idOpala, origem, destino, data_e_hora }: ModalDeDetalhesDoRastreamentoProps) {

    let auxOrigem = origem;
    auxOrigem == "org_8b77a4"? auxOrigem = destino : auxOrigem = origem;

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-500 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Detalhes <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] items-center">
                <DialogHeader>
                    <DialogTitle>Detalhes da Opala {idOpala}</DialogTitle>
                    <DialogDescription>
                        Estas são informações adicionais do cadastro da Opala selecionada.
                    </DialogDescription>
                </DialogHeader>
                {/* Adicionando o formulário */}
                <form>

                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                {origem == "org_8b77a4, org_8b77a4" ? "Cadastro:" : "Origem:"}
                            </Label>
                            <span className=" text-left text-gray-700">{`${origem == "org_8b77a4, org_8b77a4" ? destino : origem}`}</span>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                            {origem == "org_8b77a4, org_8b77a4" ? "Custodiante inicial:" : "Destino:"}
                            </Label>
                            <span className=" text-left text-gray-700">{destino}</span>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Índice:
                            </Label>
                            <span className=" text-left text-gray-700">{indice}</span>
                        </div>

                        <div className="grid grid-cols-2 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Data e hora:
                            </Label>
                            <span className=" text-left text-gray-700">{data_e_hora}</span>
                        </div>
                    </div>


                    <div className="grid grid-cols-4 items-center gap-4">

                        <div className="mt-2">

                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from "axios"
import { useEffect, useState } from "react"

interface Dados{
  id_usuario: string,
  id_funcao: string,
  destino: string,
  id: string
}

const [usuarios, setUsuarios] = useState<Dados[]>([]); 

const getUsuarios = async () =>{ 
  try {
    const usuario = await axios.get("http://localhost:3000/usuarios");
    
    setUsuarios(usuario.data);

  } catch (error) {
    console.log(error);
  }


}

function definirFuncaoDoAgente(idDoAgente: string){ 
  for (let element of usuarios){ 
    if (element.id == idDoAgente) {
      console.log(element.id_funcao);
    } else {
      console.log("Não está funcionando ainda.");
    }
  }
}

export function ModalDeCadastroDeOpala() {
  return (
    <Dialog>
      <DialogTrigger asChild>
      <Button className=" mx-4 mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color" variant="outline">
                    Adicionar

                    <svg className="rtl:rotate-180 w-4 h-4 ms-2" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Adicionar Opala</DialogTitle>
          <DialogDescription>
            Insira as informações solicitadas nos campos a seguir para adicionar uma nova Opala no sistema.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              ID do agente
            </Label>
            <Input
              id="name"
              defaultValue="0000000"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              ID Ethereum
            </Label>
            <Input
              id="username"
              defaultValue="0XX00000"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-button-color" type="submit">Adicionar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
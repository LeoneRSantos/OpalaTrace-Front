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
import axios from "axios"
import { useEffect, useState } from "react"
import { useAuth } from "../../../context/Auth"

interface ModalDeDetalhesDaOpalaProps {
  indice: string | any,// Recebe o idOpala do componente pai
  idOpala: string,
  dados: string
}

export function ModalDeDetalhesDaOpala({ indice, idOpala, dados }: ModalDeDetalhesDaOpalaProps) {

  interface Dados {
    local: string,
    peso: string,
    tipo: string,
    value: any
  }

  const [usuarios, setUsuarios] = useState<Dados[]>([]);

  const auth = useAuth();

  const getUsuarios = async () => {
    try {
      if (dados !== "n") {

        const usuario = await axios.get(`http://127.0.0.1:5000/api/v1/messages/${dados}/data`);
        setUsuarios(usuario.data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!auth?.loading) {
      getUsuarios();
    }
  }, [auth?.loading]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-2 mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color" variant="outline">
          Detalhes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Detalhes da Opala {idOpala}</DialogTitle>
          <DialogDescription>
            Estas são informações adicionais do cadastro da Opala selecionada.
          </DialogDescription>
        </DialogHeader>
        {/* Adicionando o formulário */}
        <form className="items-left">
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Local de extração:
              </Label>
              <span className=" text-left text-gray-700">{usuarios.at(0)?.value.local == undefined? "dado não fornecido": usuarios.at(0)?.value.local}</span>
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Peso:
              </Label>
              <span className=" text-left text-gray-700">{usuarios.at(0)?.value.peso == undefined? "dado não fornecido":usuarios.at(0)?.value.peso}</span>
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Tipo:
              </Label>
              <span className=" text-left text-gray-700">{usuarios.at(0)?.value.tipo== undefined? "dado não fornecido": usuarios.at(0)?.value.tipo}</span>
            </div>

            <div className="grid grid-cols-2 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Índice:
              </Label>
              <span className=" text-left text-gray-700">{indice}</span>
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

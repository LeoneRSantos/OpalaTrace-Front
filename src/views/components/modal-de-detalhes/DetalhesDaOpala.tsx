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
import { useForm } from "react-hook-form"
import { useAuth } from "../../../context/Auth"

interface ModalDeDetalhesDaOpalaProps {
  indice: string | any,// Recebe o idOpala do componente pai
  idOpala: string,
  dados: any
}

export function ModalDeDetalhesDaOpala({indice, idOpala, dados}: ModalDeDetalhesDaOpalaProps) {

  interface Dados {
    local: string,
    peso: string,
    tipo: string
  }

  const [usuarios, setUsuarios] = useState<Dados[]>([]);

  const auth = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const getUsuarios = async () => {
    try {
      const usuario = await axios.get("http://localhost:3000/usuarios");
      setUsuarios(usuario.data);

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
        <form>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Local de extração:
              </Label>
              <span className=" text-left text-gray-700">garimpo</span>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Peso:
              </Label>
              <span className=" text-left text-gray-700">10g</span>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Tipo:
              </Label>
              <span className=" text-left text-gray-700">mosaico</span>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
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
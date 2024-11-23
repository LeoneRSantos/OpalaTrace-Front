import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../context/Auth";

interface ModalDeCadastroProps {
  indice: string | any;
  id_usuario: string;
  id_funcao: string;
  destino: string;
}

export function ModalDeCadastroDeOpala({ indice, id_usuario, destino, id_funcao }: ModalDeCadastroProps) {
  interface Dados {
    id_usuario: string;
    id_funcao: string;
    destino: string;
    id: string;
  }

  const [usuarios, setUsuarios] = useState<Dados[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false); // Estado para controlar o modal
  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getUsuarios = async () => {
    try {
      const usuario = await axios.get("http://localhost:3000/usuarios");
      setUsuarios(usuario.data);
    } catch (error) {
      console.log(error);
    }
  };

  const enviarDados = async (dados: any) => {
    try {
      await axios.post("http://localhost:3000/cadastrar-opala", {
        indice: `${indice}`,
        id_usuario,
        id_funcao,
        destino,
        local: dados.local,
        peso: dados.peso,
        tipo: dados.tipo,
      });
      console.log("Dados enviados: \n", dados);

      setIsDialogOpen(false); // Fecha o modal
      window.location.reload(); // Atualiza a tela
    } catch (error) {
      console.log("Verificar a API.");
    }
  };

  useEffect(() => {
    if (!auth?.loading) {
      getUsuarios();
    }
  }, [auth?.loading]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="ml-4 mr-2 mt-4 px-4 py-6 bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color"
          variant="outline"
        >
          Adicionar Opala
          <svg
            className="rtl:rotate-180 w-4 h-4 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
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
        <form onSubmit={handleSubmit(enviarDados)}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Índice
              </Label>
              <span className=" text-left text-gray-800">{indice}</span>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="local" className="text-right">
                Local de extração
              </Label>
              <Input
                defaultValue=""
                className="col-span-3"
                {...register("local", { required: true })}
              />
              {errors.local && <span className="text-red-500">Local de extração é obrigatório</span>}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="peso" className="text-right">
              Peso (g)
            </Label>
            <Input
              defaultValue=""
              className="col-span-3"
              type="number"
              {...register("peso", { required: true })}
            />
            {errors.peso && <span className="text-red-500">Peso é obrigatório</span>}

            <Label htmlFor="tipo" className="text-right">
              Tipo
            </Label>
            <Input
              defaultValue=""
              className="col-span-3"
              {...register("tipo", { required: true })}
            />
            {errors.tipo && <span className="text-red-700 text-right">Tipo é obrigatório</span>}
          </div>
          <div className="mt-4">
            <DialogFooter>
              <Button className="bg-button-color" type="submit">
                Adicionar
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

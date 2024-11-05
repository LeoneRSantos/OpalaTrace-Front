// src/components/ModalDeTransferencia.tsx
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
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

interface TransferFormInputs {
  origem: string;
  destino: string;
  indice: string
}

interface ModalDeTransferenciaProps {
  idOpala: string; 
  idOrigem: string,
  indice: string// Recebe o idOpala do componente pai
}

export function ModalDeTransferencia({ idOpala, idOrigem, indice }: ModalDeTransferenciaProps) {
  const { register, handleSubmit } = useForm<TransferFormInputs>();

  const onSubmit: SubmitHandler<TransferFormInputs> = (data) => {
    axios.post("http://localhost:3000/transferir-opala", data).then(()=>{ 
      console.log("Dados enviados: \n", data);
  }).catch(()=> { 
      console.log("Verificar a API.")
  })
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color" variant="outline">
          Transferir
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{`Transferir Opala \n ${idOpala}`}</DialogTitle>
          <DialogDescription>
            Insira as informações solicitadas nos campos a seguir para transferir a Opala selecionada.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="origem" className="text-right">
              Origem
            </Label>
            <Input
              id="origem"
              {...register("origem")}
              defaultValue={idOrigem}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="ethereumId" className="text-right">
              Destino
            </Label>
            <Input
              id="destino"
              {...register("destino")}
              defaultValue=""
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-button-color" type="submit">Transferir</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

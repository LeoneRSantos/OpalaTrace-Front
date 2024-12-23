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
import { useNavigate } from "react-router-dom";

interface TransferFormInputs {
  origem: string;
  destino: string;
  indice: string
}

interface RastreamentoComponenteProps {
  indice: string// Recebe o idOpala do componente pai
}

export function RastreamentoComponente({indice }: RastreamentoComponenteProps) {

  let historico = useNavigate()

  const onSubmit: SubmitHandler<TransferFormInputs> = (data) => {
    axios.post("http://localhost:3000/transferir-opala", data).then(()=>{ 
      console.log("Dados enviados: \n", data);
  }).catch(()=> { 
      console.log("Verificar a API.")
  })
  };

  return (
        <Button className="ml-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-button-color rounded-lg hover:bg-button-color focus:ring-4 focus:outline-none focus:ring-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-button-color" variant="outline" onClick={()=>{ 
          historico(`/rastreamento/${indice}`);
        }}>
          Rastreamento 
        </Button>
  );
}

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/Auth"


function Formulario() {

    const [selectedFunction, setSelectedFunction] = useState(null);
    const { signed } = useAuth();

    const {
        register,
        handleSubmit,
        setValue
    } = useForm();

    const handleFunctionChange = (value: any) => {
        setSelectedFunction(value);
        setValue("id_funcao", value)
    }

    let historico = useNavigate()

    function enviarDados(dados: any) {
        axios.post("http://localhost:3000/cadastrar-usuario", dados).then(() => {
            console.log("Dados enviados: \n", dados);
            historico("/");
        }).catch(() => {
            console.log("Verificar a API.")
        });
    }

    if (signed) {
        historico("/opalas");
    }

    return (

        <section className="bg-back-color h-svh flex justify-center items-center">
            <div className="bg-form-color lg:w-6/12 px-4 pt-6 shadow-4xl rounded-3xl">
                <div className="flex flex-col min-w-0 break-words w-full mb-6  rounded-lg border-0">
                    <div className="-t mb-0 px-6 py-6">
                        <div className="text-center mb-3">
                            <h2 className="text-blueGray-500 text-md font-bold">
                                OpalaTracer
                            </h2>
                        </div>

                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <div className="text-blueGray-400 text-center mb-3 font-bold">

                        </div>
                        <form>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password"> Nome</label>
                                <input {...register('nome', {
                                    required: {
                                        value: true, message: "Este campo está vazio"
                                    }
                                })} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow text-gray-800 focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Nome"></input>
                            </div>

                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                <input {...register('email', { required: true })} type="email" className="border-0 text-gray-800 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email"></input>
                            </div>

                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Senha</label>
                                <input {...register('senha', { required: true })} type="password" className="border-0 text-gray-800 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Senha"></input>
                            </div>
                            <div className="relative w-full mb-3">
                                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Confirme sua senha</label>
                                <input type="password" className="border-0 text-gray-800 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Senha"></input>
                            </div>

                            {/* Menu das funções */}
                            <div className="text-gray-800">

                                <Select onValueChange={handleFunctionChange}>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Função" />
                                    </SelectTrigger>

                                    <SelectContent>

                                        <SelectItem value="820529c9-4510-4b3e-9c3b-736a682fb6eb">Lapidador artesanal</SelectItem>
                                        <SelectItem value="0d1626ef-8dab-4f4c-9128-3dd3a57c515d">Lapidador industrial</SelectItem>
                                        <SelectItem value="ae9f5185-e07f-4fa5-916f-2d669356b79e">Transportador</SelectItem>
                                        <SelectItem value="deb21e2e-f742-4d94-80a4-b9623885244a">Varejista</SelectItem>
                                        <SelectItem value="30cb37d4-1b38-44b8-896b-40644120144c">Cliente</SelectItem>

                                    </SelectContent>

                                </Select>
                            </div>

                            {/* Botão */}
                            <div className="text-center mt-6">
                                <button onClick={handleSubmit((data) => {
                                    console.log(data);
                                    enviarDados(data);
                                })} className="bg-button-color text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 border-2 border-white" type="button">
                                    Criar usuário

                                </button>

                            </div>
                        </form >
                    </div >
                </div >
            </div >
        </section >
    )
}

export default Formulario
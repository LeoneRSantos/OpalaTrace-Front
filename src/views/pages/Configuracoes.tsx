import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom"


function Configuracoes() {

    type Usuario = {
        id: string,
        nome: string,
        email: string,
        senha: string,
        id_funcao: string,
        to: string,
        verifiers: any,
        idEthereum: string
    }

    const [onEdit, setOnEdit] = useState(null);
    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);

    const [nomes, setnomes] = useState<Usuario[]>([])
    const [Ids, setIds] = useState<Usuario[]>([])

    function definirFuncao(idFuncao: any) {
        if (idFuncao == "f6499904-c2fd-49f1-a0a2-9bfd80a6cd65") {
            return "Lapidador";
        }
        if (idFuncao == "deb21e2e-f742-4d94-80a4-b9623885244a") {
            return "Varejista";

        }

        if (idFuncao == "ae9f5185-e07f-4fa5-916f-2d669356b79e") {
            return "Transportador";
        }

        if (idFuncao == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d") {
            return "Lapidador industrial";
        }

        if (idFuncao == "820529c9-4510-4b3e-9c3b-736a682fb6eb") {
            return "Lapidador artesanal";
        }

        if (idFuncao == "30cb37d4-1b38-44b8-896b-40644120144c") {
            return "Cliente";
        }

        // else{return "else";}
    }


    function definirCarteira(idDoUsuario: string) {
        for (let element of Ids) {
            if (element.id == idDoUsuario) {
                return element.verifiers[0].value;

            }


        }
        return "nada";
    }

    let historico = useNavigate()

    return (
        <>

            <NavBar />

            <section className="bg-back-color h-svh flex justify-center items-center">


                <div className="bg-white overflow-hidden shadow rounded-lg border lg:w-6/12 px-4 pt-6">
                    <div className="px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Perfil do usuário
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Estas são suas informações, você pode altera-las.
                        </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                        <dl className="sm:divide-y sm:divide-gray-200">
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Nome
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {usuarioLocal.nome}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {usuarioLocal.email}
                                </dd>
                            </div>

                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Função
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {definirFuncao(usuarioLocal.id_funcao)}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    ID
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {usuarioLocal.id}
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    ID Ethereum
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {usuarioLocal.idEthereum}
                                </dd>
                            </div>
                        </dl>
                    </div>



                    {/* Botão */}
                    <div className="text-center mt-6">
                        <button onClick={() => {
                            historico('/alterar-dados');
                        }} className="bg-button-color text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none  mb-4 w-full mr-5 ease-linear transition-all duration-150" type="button">
                            Alterar dados

                        </button>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Configuracoes;
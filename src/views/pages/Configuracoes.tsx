import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom"


function Configuracoes() {

    interface Usuario {
        id: string,
        nome: string,
        email: string,
        senha: string,
        id_funcao: string
    }

    const [onEdit, setOnEdit] = useState(null)

    const [nomes, setnomes] = useState<Usuario[]>([])

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

    const getNomes = async () => {
        try {
            const res = await axios.get('http://localhost:3000/usuarios');
            // console.log(res.data);
            console.log(res.data[0])
            setnomes(res.data)

            // return res.data[0].nome;


        } catch (error) {
            console.log(error)
        }
    }

    getNomes();
    let historico = useNavigate()

    return (
        <>

            <NavBar />

            <section className="bg-back-color h-svh flex justify-center items-center">


                <div className="bg-white overflow-hidden shadow rounded-lg border">
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
                                    Fulano
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    fulano@example.com
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Senha
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    ******
                                </dd>
                            </div>
                            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Função
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    Lapidador industrial
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Configuracoes;
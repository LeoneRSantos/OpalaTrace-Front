import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navbar/Navbar";



function Configuracoes() {

    const [nomes, setnomes] = useState()
    const [onEdit, setOnEdit] = useState(null)

    const getNomes = async () => {
        try {
            const res = await axios.get('http://localhost:3000/usuarios');
            setnomes(res.data)
        } catch (error) {
            console.log(error)
        }
    }

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
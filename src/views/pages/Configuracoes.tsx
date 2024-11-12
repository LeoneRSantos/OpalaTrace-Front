import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { definirFuncao } from "../../utils/DefinirFuncao";


function Configuracoes() {

    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);

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
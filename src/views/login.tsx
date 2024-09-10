export function SignIn() {

    return (
        <>
            <section className="bg-back-color h-svh flex justify-center items-center">
                <div className="bg-form-color lg:w-6/12 px-4 pt-6 shadow-4xl rounded-3xl">
                    <div className="flex flex-col min-w-0 break-words w-full mb-6  rounded-lg border-0">
                        <div className="-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h2 className="text-blueGray-500 text-md font-bold">
                                    OpalaTrace
                                </h2>
                            </div>

                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <div className="text-blueGray-400 text-center mb-3 font-bold">

                            </div>
                            <form>

                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label>
                                    <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-form-color" placeholder="Email"></input>
                                </div>

                                <div className="relative w-full mb-3">
                                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Senha</label>
                                    <input type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 text-form-color" placeholder="Senha"></input>
                                </div>

                               {/* Ir pro formulário*/}
                                <div>
                                    <label className=" flex items-center">
                                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                                                AInda não está cadastrado?  
                                                <a href="/formulario" className=" text-error-color margin-left: m-2">
                                                    Criar conta
                                                </a>
                                            </span>
                                    </label>
                                </div>

                                {/* Botão */}
                                <div className="text-center mt-6">
                                    <button className="bg-button-color text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button">
                                        Entrar
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}

export function logar() {
    var login = document.getElementById("senha")



    console.log(login)
}
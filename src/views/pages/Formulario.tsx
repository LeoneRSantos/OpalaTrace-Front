
function Formulario() {
    return (
        <main className="h-screen flex w-full">

            <div className="min-h-screen flex items-center justify-center w-full bg-gray-950">

                <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">

                    <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-200">Criar conta</h1>

                    <form action="">

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email </label>
                            <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="ex: opalas@email.com" required></input>

                        </div>

                        <div className="mb-4">
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Senha</label>
                                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:#FF4500" placeholder="Insira sua senha" required></input>
                                
                        </div>

                        <div className="mb-4">
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirmar senha</label>
                                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:#FF4500" placeholder="Insira novamente sua senha" required></input>
                                
                        </div>

                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white">Criar conta</button>

                    </form>

                </div>


            </div>

        </main>
    )
}

export default Formulario
export function SignIn() {
    return (
        <>
            <main className="h-screen flex w-full">
                <div className="min-h-screen flex items-center justify-center w-full bg-gray-950">
                    <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
                        <h1 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-200">Sistema Opalas</h1>
                        <form action="#">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email </label>
                                <input type="email" id="email" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="eu@email.com" required></input>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="senha" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Senha</label>
                                <input type="password" id="password" className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:#FF4500" placeholder="Insira sua senha" required></input>
                                <a href="#"
                                    className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Esqueci minha senha</a>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked></input>
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Lembre-se de mim</label>
                                </div>
                                <a href="#"
                                    className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Criar conta</a>
                            </div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white">Login</button>
                        </form>
                    </div>
                </div>
            </main>
        </>

    )

}
import NavBar from "../components/navbar/Navbar";

function Home() {
    return (
        <>  
         <NavBar />
         
        <main className="h-screen flex w-full">

            <div className="min-h-screen flex items-start justify-center w-full bg-back-color">
                <div>
                    <div className="margin-left: 16px;">
                        <h2>Home</h2>
                        <p>Esta será a tela na qual será possível adicionar e atualizar opalas</p>
                    </div>
                </div>
            </div>

        </main>
         </>
    )
}

export default Home;
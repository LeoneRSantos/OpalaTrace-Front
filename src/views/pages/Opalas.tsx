import NavBar from "../components/navbar/Navbar";

function Opalas() {
    return (
        <>
            <NavBar />
            <main className="h-screen flex w-full bg-back-color">

                <div className="min-h-screen flex items-start justify-center w-full">
                    <div>
                        <div className="margin-left: 16px;">
                            <h2>Opalas</h2>
                            <p>Esta será a tela na qual será possível adicionar e atualizar opalas</p>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Opalas;
import { definirDadosPeloMint, definirIDPeloMint } from "@/utils/DefinirMintes";
import { ModalDeCadastroDeOpala } from "../modal-de-cadastro-de-opala/Modal-de-cadastro-de-opala";
import { definirNomePeloIDEthereum } from "@/utils/DefinirNomePeloIDEthereum";
import { definirFuncaoPeloIDEthereum } from "@/utils/DefinirFuncao";
import { ModalDeTransferencia } from "../modal-de-transferencia/Modal-de-transferencia";
import { RastreamentoComponente } from "../rastreamento/Rastreamento-componente";
import { ModalDeDetalhesDaOpala } from "../modal-de-detalhes/DetalhesDaOpala";
import { useState } from "react";

interface ComponenteOpalaProps {
    todas: any;
    opalas: any;
    mintes: any;
    nomes: any;
    infoBD: any;
    transferida: boolean;
    transferidas: any;
}

export function ComponenteOpala({ todas, opalas, mintes, nomes, infoBD, transferida, transferidas }: ComponenteOpalaProps) {
    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);
    const [activeTab, setActiveTab] = useState<'custody' | 'transferred'>('custody');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const selectTab = (tab: 'custody' | 'transferred') => {
        setActiveTab(tab);
        setDropdownOpen(false);
    };

    return (
        <main className="h-screen w-full justify-center bg-back-color">
            <div className="display-grid grid-columns-2">
                {usuarioLocal.id_funcao === "0d1626ef-8dab-4f4c-9128-3dd3a57c515d" && !transferida ||
                usuarioLocal.id_funcao === "820529c9-4510-4b3e-9c3b-736a682fb6eb" && !transferida ? (
                    <ModalDeCadastroDeOpala
                        indice={Number(todas.at(0)?.tokenIndex) + 1}
                        id_funcao={`${usuarioLocal.id_funcao}`}
                        id_usuario={usuarioLocal.id}
                        destino={usuarioLocal.idEthereum}
                    />
                ) : (
                    <div className="mt-2 ml-2"></div>
                )}

                {/* Dropdown Menu */}
                <div className="relative inline-block text-left mt-2">
                    <button
                        onClick={toggleDropdown}
                        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-3 bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none mx-4"
                    >
                        {activeTab === 'custody' ? 'Em custódia' : 'Transferidas'}
                        <svg
                            className="ml-2 -mr-1 h-5 w-5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div
                            className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        >
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                <button
                                    onClick={() => selectTab('custody')}
                                    className={`block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                                        activeTab === 'custody' ? 'font-semibold' : ''
                                    }`}
                                >
                                    Em custódia
                                </button>
                                <button
                                    onClick={() => selectTab('transferred')}
                                    className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left ${
                                        activeTab === 'transferred' ? 'font-semibold' : ''
                                    }`}
                                >
                                    Transferidas
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="grid grid-cols-2 w-full">
                    {(activeTab === 'custody' ? opalas : transferidas).map((cadaOpala: any) => (
                        <div
                            key={cadaOpala.localId}
                            className="max-w-lg mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        >
                            <p>
                                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Opala {definirIDPeloMint(mintes, cadaOpala.tokenIndex)}
                                </span>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Custodiante: {definirNomePeloIDEthereum(cadaOpala.to, nomes, infoBD)}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Função: {definirFuncaoPeloIDEthereum(cadaOpala.to, nomes, infoBD)}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Índice: {cadaOpala.tokenIndex}</p>

                            {activeTab === 'custody' && (
                                <ModalDeTransferencia
                                    key={cadaOpala.id}
                                    idOpala={definirIDPeloMint(mintes, cadaOpala.tokenIndex)}
                                    idOrigem={usuarioLocal.idEthereum}
                                    indice={cadaOpala.tokenIndex}
                                />
                            )}

                            <RastreamentoComponente indice={cadaOpala.tokenIndex} />

                            <ModalDeDetalhesDaOpala
                                indice={cadaOpala.tokenIndex}
                                idOpala={definirIDPeloMint(mintes, cadaOpala.tokenIndex)}
                                dados={`${
                                    definirDadosPeloMint(mintes, cadaOpala.tokenIndex) === "Dado não fornecido"
                                        ? "n"
                                        : definirDadosPeloMint(mintes, cadaOpala.tokenIndex)
                                }`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

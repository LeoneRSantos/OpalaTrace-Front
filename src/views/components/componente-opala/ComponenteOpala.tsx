import { definirDadosPeloMint, definirIDPeloMint } from "@/utils/DefinirMintes";
import { ModalDeCadastroDeOpala } from "../modal-de-cadastro-de-opala/Modal-de-cadastro-de-opala";
import { definirNomePeloIDEthereum } from "@/utils/DefinirNomePeloIDEthereum";
import { definirFuncaoPeloIDEthereum } from "@/utils/DefinirFuncao";
import { ModalDeTransferencia } from "../modal-de-transferencia/Modal-de-transferencia";
import { RastreamentoComponente } from "../rastreamento/Rastreamento-componente";
import { ModalDeDetalhesDaOpala } from "../modal-de-detalhes/DetalhesDaOpala";
import { useState } from "react";

interface ComponenteOpalaProps {
    todas: any,
    opalas: any,
    mintes: any,
    nomes: any,
    infoBD: any,
    transferida: boolean,
    transferidas: any
}

export function ComponenteOpala({ todas, opalas, mintes, nomes, infoBD, transferida, transferidas }: ComponenteOpalaProps) {

    const usuarioLocal = JSON.parse(localStorage.getItem("@Auth:usuario")!);
    const [activeTab, setActiveTab] = useState<'custody' | 'transferred'>('custody');

    return (

        <main className="h-screen  w-full justify-center  bg-back-color">
            <div className="dispay-grid grid-columns-2">

                {usuarioLocal.id_funcao == "0d1626ef-8dab-4f4c-9128-3dd3a57c515d" && transferida == false || usuarioLocal.id_funcao == "820529c9-4510-4b3e-9c3b-736a682fb6eb" && transferida == false ?

                    <ModalDeCadastroDeOpala indice={Number(todas.at(0)?.tokenIndex) + 1} id_funcao={`${usuarioLocal.id_funcao}`} id_usuario={usuarioLocal.id} destino={usuarioLocal.idEthereum} /> :
                    <div className="mt-16"></div>
                }



                <div className="grid grid-cols-2 w-full">
                    {(activeTab === 'custody' ? opalas : transferidas).map((cadaOpala: any) => {
                        return (

                        <div key={cadaOpala.localId} className="max-w-lg mx-4 mt-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <p>
                                <span className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Opala {definirIDPeloMint(mintes, cadaOpala.tokenIndex)}</span>
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Custodiante: {definirNomePeloIDEthereum(cadaOpala.to, nomes, infoBD)}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Função: {definirFuncaoPeloIDEthereum(cadaOpala.to, nomes, infoBD)}</p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Índice: {cadaOpala.tokenIndex}</p>

                            {transferida == false ? <ModalDeTransferencia key={cadaOpala.id} idOpala={definirIDPeloMint(mintes, cadaOpala.tokenIndex)} idOrigem={usuarioLocal.idEthereum} indice={cadaOpala.tokenIndex} /> : ""}

                            <RastreamentoComponente indice={cadaOpala.tokenIndex} />

                            <ModalDeDetalhesDaOpala indice={cadaOpala.tokenIndex} idOpala={definirIDPeloMint(mintes, cadaOpala.tokenIndex)} dados={`${definirDadosPeloMint(mintes, cadaOpala.tokenIndex) == "Dado não fornecido" ? "n" : definirDadosPeloMint(mintes, cadaOpala.tokenIndex)}`} />
                        </div>
                    )

                })}

            </div>

        </main>

    );

}